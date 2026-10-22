// Cache hors ligne : PL-neurodev’ s’ouvre sans réseau après une première visite (dernière copie des flashs et des revues).
// Page et données : réseau d’abord, copie locale en secours. Polices, icônes et marked : cache d’abord.
// Pour publier de nouvelles polices, icônes ou une nouvelle version de marked : change le numéro de CACHE ci-dessous.
const CACHE = "plneurodev-v1";
const SHELL = ["./", "index.html", "manifest.json", "icon-32.png", "icon-180.png", "icon-512.png",
  "fonts/atkinson-400.woff2", "fonts/atkinson-400-i.woff2", "fonts/atkinson-700.woff2", "fonts/lexend.woff2",
  "vendor/marked.min.js", "data/flashs.json", "data/revues.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.indexOf("plneurodev-") === 0 && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    if (req.mode === "navigate" || url.pathname.endsWith(".html")) { // page : réseau d'abord, copie locale en secours
      const key = new Request(url.origin + url.pathname);
      try { const r = await fetch(req, { cache: "no-cache" }); if (r.ok) await c.put(key, r.clone()); return r; }
      catch (_) { return (await c.match(key)) || (await c.match("index.html")) || Response.error(); }
    }
    if (url.pathname.endsWith(".json") && url.pathname.includes("/data/")) { // contenu du jour : réseau d'abord
      try { const r = await fetch(req, { cache: "no-cache" }); if (r.ok) await c.put(url.origin + url.pathname, r.clone()); return r; }
      catch (_) { return (await c.match(url.origin + url.pathname)) || Response.error(); }
    }
    const hit = await c.match(req);
    if (hit) return hit;
    try { const r = await fetch(req); if (r.ok) await c.put(req, r.clone()); return r; }
    catch (_) { return Response.error(); }
  })());
});

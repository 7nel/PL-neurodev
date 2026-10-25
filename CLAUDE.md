# PL-neurodev’ — état du projet (version finalisée le 2026-10-25)

Complète `../CLAUDE.md` (charte PL v2.2). Ce fichier décrit l'état réel du dépôt ; ce qui n'a pas été vérifié est signalé comme tel.

## Mission et modules

Veille scientifique personnelle de Pauline sur les troubles neurodéveloppementaux (TSA, TDA/H, DYS/TSLE, TDL/TDC, HPI, DI/TSAF, attachement et trauma), pour la psycho-éducation et l'enseignement spécialisé au CO en Valais. Usage personnel, téléphone en priorité. Site statique : https://7nel.github.io/PL-neurodev/

Une seule page `index.html` (styles et script intégrés) qui charge les JSON par `fetch()`.

- **Flash du jour** : carte d'aperçu (résumé, niveau de preuve, limites, pratique au CO, source), avec accès direct aux limites sur écran étroit.
- **L'essentiel de la semaine** : 3 points de la dernière revue, toujours visibles, rendus en markdown assaini.
- **Archive** : classée par semaine (une revue = un groupe) ou par type ; recherche plein texte sans accents ; filtre par thème ; texte intégral déployable.
- **Niveau de preuve** (`solide`, `nuance`, `floue`) en badge pictogramme + libellé, légende dépliable ; « Preuve non évaluée » quand le champ manque.
- Bouton clair / sombre, copie hors ligne (`sw.js`), installation sur l'écran d'accueil (`manifest.json`).

## Contenus et veille automatique : à préserver

- `data/flashs.json` et `data/revues.json` sont alimentés chaque jour par la veille automatique (commits « Flash du … »). Le format est décrit dans `README.md`, que la veille lit : ne pas le casser.
- Ne jamais réécrire ni supprimer l'historique. Avant toute modification : `git fetch`, fusionner `origin/main`, ne jamais pousser de force.
- Ne pas modifier le contenu scientifique existant (textes, sources, dates, conclusions) pour une raison de forme.
- Le champ `preuve` est celui de la veille : ne pas remplir un niveau par défaut ni rétroactivement. Absent = « Preuve non évaluée ».
- `limite_critique` est un champ facultatif rédigé à la main (voir `docs/limite-critique.md`) ; la veille ne le produit pas.

## Direction « Le trait »

Filets de 3 px (6 px pour les accents), rayons de 8 px (`--r-fld`) sur les champs, rythme en `--s1`…`--s7`. Titres en Lexend, texte en Atkinson Hyperlegible, autohébergés dans `fonts/`. Tailles en `rem` : le texte courant fait 1 rem, soit 18 px (racine à 112,5 %), et aucun texte n'est plus petit. Mots longs coupés avant de déborder. Pas de motif ni d'illustration.

## Écarts assumés par rapport à la charte

| Élément | Écart | Raison |
|---|---|---|
| Teintes de thème `--c-tsa`, `--c-tdah`, `--c-dys-tsle`, `--c-tdl-tdc`, `--c-hpi`, `--c-di-tsaf`, `--c-attachement`, `--c-transversal` (clair et sombre) | Teintes propres, hors du socle | Repérer le thème d'un coup d'œil. Jamais seules : le nom du thème est toujours écrit. |
| Noms de variables hérités : `--fg`, `--muted`, `--border`, `--card`, `--chip-bg`, `--accent-2` | Pas de migration vers `--ink`, `--ink-2`, `--line`, `--surface`… | Charte : aucune migration sans demande. `--accent-2` est défini mais non utilisé. |
| Niveau de preuve en trois états, pictogramme plein / demi / vide | Exception pédagogique | Le niveau de preuve et ses limites doivent rester visibles, jamais cachés. |
| Accès direct aux limites (« Voir les limites méthodologiques ») | Lien réservé aux écrans de moins de 861 px | Sur grand écran, les limites sont déjà visibles à côté. |

Les valeurs de neutres, de sauge, de contour (`--line-ctl`) et de sombre suivent la charte v2.2.

## Sécurité et accessibilité

- **Rendu** : `marked` (v12.0.2, autohébergé dans `vendor/`) n'interprète ni le HTML brut ni les images ; tout HTML produit passe ensuite par `sanitizeHtml()` (balises et attributs en liste blanche ; liens `http(s)`, `mailto`, ancres et chemins relatifs seulement). « L'essentiel » utilise le même rendu.
- **CSP** en balise `meta` : `default-src 'none'`, scripts, styles, images, polices et `fetch` limités à l'origine ; `'unsafe-inline'` est conservé pour les scripts et styles intégrés. Aucune ressource externe, aucun traceur.
- **Service worker** (`sw.js`, cache `plneurodev-v1`) : réseau d'abord pour la page et les JSON ; ne supprime que les caches dont le nom commence par `plneurodev-`, jamais ceux des autres sites. Changer le numéro de `CACHE` pour publier de nouvelles polices, icônes ou une nouvelle version de `marked`.
- **Accessibilité** : contrastes calculés sur les tokens (≥ 4,5:1), navigation au clavier, focus visible, thèmes jamais portés par la couleur seule, `prefers-reduced-motion` respecté, `prefers-color-scheme` suivi. Un lecteur d'écran n'a jamais été utilisé pour vérifier.

## Licence

- **Contenus originaux** (textes de la veille rédigés par Pauline, mise en page, code propre à ce site) : © 2026 Pauline Lentes, **CC BY-NC 4.0** (https://creativecommons.org/licenses/by-nc/4.0/deed.fr). Mention dans le pied de page.
- **Hors de cette licence** : les publications scientifiques citées et leurs auteur·es, tout contenu tiers, et les dépendances. `marked` reste sous sa licence MIT (`vendor/marked-LICENSE.md`). Les polices Atkinson Hyperlegible et Lexend restent soumises à la licence de leurs éditeurs (à ma connaissance, SIL Open Font License) ; leurs fichiers de licence ne sont pas dans le dépôt, à compléter si besoin.

## Limites connues

- Contrôles faits dans Chrome (émulation d'écrans). Non vérifiés : Safari et iOS, Firefox, installation sur l'écran d'accueil, appareils physiques, lecteurs d'écran.
- Les flashs existants n'ont pas de champ `preuve` : « Preuve non évaluée » s'affiche. Il appartient à la veille de le renseigner à l'avenir.
- Contenu produit automatiquement : à lire avec l'esprit critique qu'appelle toute synthèse rapide.
- Les tests de ce projet ne sont pas dans le dépôt : ils sont conservés à part (`../direction-artistique/tests-neurodev-*.mjs`).

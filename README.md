# PL-neurodev

Veille scientifique personnelle sur les troubles neurodéveloppementaux (TSA, TDA/H, DYS, TDL/TDC, HPI, DI/TSAF, attachement & trauma), pour un contexte de psycho-éducation et enseignement spécialisé au CO en Valais.

Site statique, pas de connexion requise : https://7nel.github.io/PL-neurodev/

## Structure

- `index.html` — la page (design, logique de filtrage, rendu markdown), lit les données via `fetch()`
- `data/flashs.json` — flashs quotidiens (tableau, un objet par jour : `date`, `themes`, `titre`, `resume` (1–2 phrases : ce qui est dit), `limites` (niveau de preuve et limites, optionnel), `pratique` (pour la pratique au CO, optionnel), `source`)
- `data/revues.json` — revues hebdomadaires (tableau, un objet par semaine : `date_debut`, `date_fin`, `titre`, `essentiel` (3 points), `items` (tableau `{section, themes, titre?, texte}`))
- `icon-*.png`, `manifest.json` — icône et métadonnées pour l'écran d'accueil

## Mettre à jour le contenu

Pas besoin de toucher `index.html` pour ajouter du contenu : il suffit d'ajouter un objet aux tableaux JSON dans `data/` et de pousser le commit. Le site se recharge tout seul (fetch avec cache-busting).

`themes` valides : `tsa`, `tdah`, `dys-tsle`, `tdl-tdc`, `hpi`, `di-tsaf`, `attachement`, `transversal`.

`section` valides pour `items` d'une revue : `etude`, `divergence`, `zone_floue`, `implication_co`, `contexte_suisse`, `a_surveiller`.

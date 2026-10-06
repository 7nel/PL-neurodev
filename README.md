# PL-neurodev

Veille scientifique personnelle sur les troubles neurodéveloppementaux (TSA, TDA/H, DYS, TDL/TDC, HPI, DI/TSAF, attachement & trauma), pour un contexte de psycho-éducation et enseignement spécialisé au CO en Valais.

Site statique, pas de connexion requise : https://7nel.github.io/PL-neurodev/

## Structure

- `index.html` — la page (design, logique de filtrage, rendu markdown), lit les données via `fetch()`
- `data/flashs.json` — flashs quotidiens (tableau, un objet par jour : `date`, `themes`, `titre`, `resume` (1–2 phrases : ce qui est dit), `limites` (niveau de preuve et limites, optionnel), `pratique` (pour la pratique au CO, optionnel), `preuve` (optionnel : `solide`, `nuance` ou `floue`), `source`)
- `data/revues.json` — revues hebdomadaires (tableau, un objet par semaine : `date_debut`, `date_fin`, `titre`, `essentiel` (3 points), `items` (tableau `{section, themes, titre?, preuve?, texte}`))
- `icon-*.png`, `manifest.json` — icône et métadonnées pour l'écran d'accueil

## Mettre à jour le contenu

Pas besoin de toucher `index.html` pour ajouter du contenu : il suffit d'ajouter un objet aux tableaux JSON dans `data/` et de pousser le commit. Le site se recharge tout seul (fetch avec cache-busting).

`themes` valides : `tsa`, `tdah`, `dys-tsle`, `tdl-tdc`, `hpi`, `di-tsaf`, `attachement`, `transversal`.

`section` valides pour `items` d'une revue : `etude`, `divergence`, `zone_floue`, `implication_co`, `contexte_suisse`, `a_surveiller`.

## Niveau de preuve

Chaque flash et chaque item de revue peut porter un champ `preuve` (`solide`, `nuance`, `floue`), affiché en badge (pictogramme plein / demi / vide + libellé). Sans ce champ, le site lit le premier mot de la ligne « Niveau de preuve » du texte d'un item de revue : « élevé » donne `solide`, « modéré » donne `nuance`, « faible » donne `floue`. C'est une lecture automatique du premier mot, à vérifier. Un flash sans champ `preuve` n'affiche pas de badge.

## Archive

L'archive est une liste unique, classée par mois (le mois le plus récent est ouvert, les autres repliés). Chaque carte porte une étiquette de type (Flash, Étude, Zone floue, Pratique au CO…), son thème et son badge de preuve. La recherche plein texte (accents ignorés) et le filtre par thème ouvrent les mois qui correspondent.

## Consigne pour la veille automatique

Pour chaque flash et chaque item de revue, renseigner `preuve` avec l'une de ces trois valeurs, d'après le niveau de preuve déjà écrit dans le texte :
- `solide` : essai contrôlé randomisé ou méta-analyse de qualité, effectif suffisant, résultat répliqué ;
- `nuance` : preuve modérée, ou solide mais limitée (échantillon, un seul pays, observationnel) ;
- `floue` : preuve faible (étude préliminaire, narrative, petit effectif, communiqué de presse, texte intégral non lu).
Si le niveau ne peut pas être évalué, omettre le champ plutôt que d'en deviner un.

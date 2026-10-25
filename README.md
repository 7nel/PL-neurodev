# PL-neurodev

Veille scientifique personnelle sur les troubles neurodéveloppementaux (TSA, TDA/H, DYS, TDL/TDC, HPI, DI/TSAF, attachement & trauma), pour un contexte de psycho-éducation et enseignement spécialisé au CO en Valais.

Site statique, pas de connexion requise : https://7nel.github.io/PL-neurodev/

## Structure

- `index.html` — la page (design, logique de filtrage, rendu markdown), lit les données via `fetch()`
- `data/flashs.json` — flashs quotidiens (tableau, un objet par jour : `date`, `themes`, `titre`, `resume` (1–2 phrases : ce qui est dit), `limites` (niveau de preuve et limites, optionnel), `pratique` (pour la pratique au CO, optionnel), `preuve` (optionnel : `solide`, `nuance` ou `floue`), `source`)
- `data/revues.json` — revues hebdomadaires (tableau, un objet par semaine : `date_debut`, `date_fin`, `titre`, `essentiel` (3 points ; markdown en ligne accepté, par exemple `*Pediatrics*` pour l’italique ou `**…**` pour le gras), `items` (tableau `{section, themes, titre?, preuve?, texte}`))
- `sw.js` — copie hors ligne : la page, les polices et les dernières données restent lisibles sans réseau (réseau d'abord pour la page et les JSON)
- `icon-*.png`, `manifest.json` — icône et métadonnées pour l'écran d'accueil

## Mettre à jour le contenu

Pas besoin de toucher `index.html` pour ajouter du contenu : il suffit d'ajouter un objet aux tableaux JSON dans `data/` et de pousser le commit. Le site se recharge tout seul (fetch avec revalidation `no-cache`). Pour publier de nouvelles polices ou icônes, change le numéro de `CACHE` dans `sw.js`.

`themes` valides : `tsa`, `tdah`, `dys-tsle`, `tdl-tdc`, `hpi`, `di-tsaf`, `attachement`, `transversal`.

`section` valides pour `items` d'une revue : `etude`, `divergence`, `zone_floue`, `implication_co`, `contexte_suisse`, `a_surveiller`.

## Niveau de preuve

Chaque flash et chaque item de revue peut porter un champ `preuve` (`solide`, `nuance`, `floue`), affiché en badge (pictogramme plein / demi / vide + libellé). Sans ce champ, le site lit le premier mot de la ligne « Niveau de preuve » du texte d'un item de revue : « élevé » donne `solide`, « modéré » donne `nuance`, « faible » donne `floue`. C'est une lecture automatique du premier mot, à vérifier. Sans niveau, la carte du flash du jour affiche « Preuve non évaluée » ; dans l'archive, ce message figure en tête du texte déployé. Une légende des niveaux est dépliable sous la carte du jour.

## Archive

L'archive est classée par semaine : chaque revue hebdomadaire forme un groupe, avec les flashs de la même période (les flashs plus récents que la dernière revue sont regroupés sous « Depuis la dernière revue »). La semaine la plus récente est ouverte, les autres repliées. Un second classement, « Type », regroupe par Zone floue, Pratique au CO, Étude, etc. Chaque carte porte son type, son thème et son badge de preuve. La recherche plein texte (accents ignorés) et le filtre par thème ouvrent les groupes qui correspondent.

## Consigne pour la veille automatique

Pour chaque flash et chaque item de revue, renseigner `preuve` avec l'une de ces trois valeurs, d'après le niveau de preuve déjà écrit dans le texte :
- `solide` : essai contrôlé randomisé ou méta-analyse de qualité, effectif suffisant, résultat répliqué ;
- `nuance` : preuve modérée, ou solide mais limitée (échantillon, un seul pays, observationnel) ;
- `floue` : preuve faible (étude préliminaire, narrative, petit effectif, communiqué de presse, texte intégral non lu).
Si le niveau ne peut pas être évalué, omettre le champ plutôt que d'en deviner un. Un flash sans `preuve` s'affiche « Preuve non évaluée » : c'est le comportement voulu. Ne jamais remplir un niveau par défaut, et ne pas modifier les flashs déjà publiés pour y ajouter un niveau.

## Licence

Contenus originaux (textes de la veille rédigés par Pauline, mise en page, code propre à ce site) : © 2026 Pauline Lentes, [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.fr). Cette licence ne couvre pas les publications scientifiques citées, les contenus tiers ni les dépendances : `marked` (MIT, `vendor/marked-LICENSE.md`) et les polices (Atkinson Hyperlegible, Lexend) gardent leurs propres conditions. Voir `CLAUDE.md` pour l'état du projet et ses limites.

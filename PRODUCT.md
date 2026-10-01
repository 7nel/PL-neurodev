# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Pauline, seule utilisatrice : étudiante en enseignement spécialisé / psycho-éducation, active au CO en Valais. Elle consulte le site au quotidien (téléphone via l'écran d'accueil, ou ordinateur) pour se tenir à jour et retrouver ce qu'elle a lu.

## Product Purpose
Veille scientifique personnelle sur les troubles neurodéveloppementaux (TSA, TDA/H, DYS/TSLE, TDL/TDC, HPI, DI/TSAF, attachement et trauma). Un flash quotidien court, puis une revue hebdomadaire. Succès : lire l'essentiel en quelques secondes, et retrouver plus tard le texte intégral classé par thème.

## Positioning
Pas un fil d'actualités : chaque flash explicite le niveau de preuve et les limites de l'étude, et le traduit en implications pour la pratique au CO. Le contenu est conservé et classé par catégorie, comme une base personnelle consultable.

## Operating Context
Contenu ajouté chaque jour par une veille automatique (commits sur `data/flashs.json` et `data/revues.json`). Site statique sur GitHub Pages (https://7nel.github.io/PL-neurodev/), sans connexion, installable sur l'écran d'accueil.

## Capabilities and Constraints
- Page unique `index.html` qui charge les JSON par `fetch()` ; rendu markdown ; pas de build.
- Aperçu court du flash du jour en haut ; texte intégral rangé dans les catégories (« Flashs précédents », études, divergences, zones floues, implications CO, contexte suisse, à surveiller).
- Filtre par thème (tsa, tdah, dys-tsle, tdl-tdc, hpi, di-tsaf, attachement, transversal), chaque thème avec sa couleur.
- Bouton clair / sombre.
- Le format des JSON est défini dans le README ; la veille automatique en dépend.
- Lisible sur téléphone en priorité.

## Brand Commitments
Nom : PL-neurodev. Langue : français. Icônes existantes (`icon-*.png`) et couleur de thème `#35606B`.

## Evidence on Hand
Contenu réel dans `data/`. Aucune donnée de fréquentation, aucun témoignage : ne rien inventer.

## Product Principles
- L'aperçu d'abord, le détail à portée de main.
- Niveau de preuve et limites visibles, jamais cachés.
- Tout contenu reste retrouvable par thème.
- Sobre et lisible avant tout : outil de travail quotidien, pas vitrine.

## Accessibility & Inclusion
Lisibilité sur petit écran ; contraste suffisant en clair et en sombre.

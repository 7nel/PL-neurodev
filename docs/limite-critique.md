# Champ éditorial facultatif `limite_critique` (documentation technique)

Ce document est volontairement **séparé du `README.md`**, que lit la veille automatique pour connaître le format des données. Le champ décrit ici est **rédigé à la main**. La veille automatique ne doit ni le produire ni le modifier.

## Rôle
Mettre en tête de fiche la seule limite méthodologique qui change l’interprétation d’un flash (par exemple « rapport d’experts, non une méta-analyse »). Il complète `limites`, il ne le remplace pas.

## Format
Dans `data/flashs.json`, un flash peut porter un champ de plus :

```json
{
  "date": "2026-10-23",
  "titre": "…",
  "resume": "…",
  "limites": "Niveau de preuve et limites détaillées…",
  "limite_critique": "Une phrase : la limite à retenir avant tout.",
  "source": "…"
}
```

- Type : texte, markdown en ligne accepté (gras, italique, liens). Une ou deux phrases.
- Facultatif. Absent, vide ou `null` : rien n’est affiché.
- Aucun flash existant n’est à modifier ; aucun autre champ ne change.

## Affichage (`index.html`)
- Flash du jour : bloc « Limite à retenir », juste sous le niveau de preuve (même colonne sur téléphone, colonne de droite sur grand écran).
- Archive : repris en tête du texte déployé du flash (« **Limite à retenir :** … »), et donc trouvé par la recherche.
- Aucune déduction : le site **n’utilise jamais** la première phrase de `limites` à sa place.

## Compatibilité
- Anciens flashs et flashs de la veille automatique : sans effet.
- Les revues hebdomadaires (`revues.json`) n’ont pas ce champ.
- Retirer le champ d’un flash le fait simplement disparaître.

## Responsabilité éditoriale
Le texte est de la responsabilité de l’auteure du site. Il ne doit pas affirmer plus que la source ne l’établit ; en cas de doute, ne pas le renseigner.

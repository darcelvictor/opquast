
#Accessibilité #Développement #Editorial #Liens

Contrairement à une légende répandue, ouvrir une nouvelle fenêtre n’est pas une technique proscrite sur le plan de l’accessibilité. En revanche, si vous choisissez de le faire, il faut absolument prévenir les utilisateurs. Et c’est facile !


## Objectif

* Permettre à l'utilisateur d'anticiper le résultat de l'activation d'un lien.
* Éviter aux utilisateurs d'aides techniques d'être désorientés par l'ouverture d'une nouvelle fenêtre qui n'est pas toujours perceptible et perturbe notamment l'utilisation de l'historique de navigation.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Ajouter une mention du type « (nouvelle fenêtre) », soit directement dans le libellé du lien, soit dans son attribut `title` qui doit alors reprendre et compléter le libellé.

Ajouter une mention du type « (nouvelle fenêtre) » dans les étiquettes de contrôle de formulaire, dans les libellés de boutons ou dans tout autre objet provoquant l'ouverture d'une nouvelle fenêtre.

En savoir plus: [élément `a` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)

## Contrôle

Dans les pages inspectées :

* Identifier les liens et autres contrôles d'ouverture d'une nouvelle fenêtre, c'est-à-dire :
* * Les usages de l'attribut `target` dans la source générée HTML ;
  * Les usages de la fonctionnalité `window.open` via une recherche dans les fichiers Javascript et dans la source HTML ;
  Vérifier, pour chacun de ces liens, quelle que soit la technologie utilisée, la présence d'un avertissement explicite consultable avant toute action sur celui-ci.


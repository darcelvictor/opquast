
#Accessibilité #Conception #Navigation

Très peu de sites peuvent se permettre de fournir une navigation exclusivement à partir d’icônes. Dans la plupart des cas, même si la signification d’une icône vous semble évidente, elle ne le sera pas forcément pour vos utilisateurs. Soyez prudent : doublez l’image avec du texte.


## Objectif

* Limiter le temps d'apprentissage de l'interface.
* Faciliter la compréhension des icônes.
* Limiter le risque d'erreurs.

## Mise en œuvre

La nature de la cible de chaque icône-lien lorsqu'elle n'est pas accompagnée d'un contenu textuel est précisée par l'attribut `alt` de l'image et par l'attribut `title` ou `aria-label` du lien.

En savoir plus: [`img` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img)

## Contrôle

Vérifier que chaque icône de navigation ou d'action sans contenu textuel associé est dotée :

* D'un attribut `alt` pertinent pour l'élément `img` ;
* D'un attribut `title` ou `aria-label` pertinent pour l'élément `a`, `button` ou `input` ;


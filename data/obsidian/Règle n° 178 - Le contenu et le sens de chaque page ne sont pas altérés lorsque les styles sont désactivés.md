
#Accessibilité #Développement #Présentation

Les styles constituent une couche de présentation. Les contenus doivent rester lisibles et compréhensibles lorsque cette couche ne peut pas se voir ou s’afficher.


## Objectif

* Permettre la compréhension des contenus par les utilisateurs dont le navigateur n'appliquera pas les feuilles de styles du site ou dont le mode d'accès n'est pas visuel.
* Séparer rigoureusement les contenus de la présentation pour améliorer leur interopérabilité.
* Favoriser le référencement du contenu.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Dans l’usage de CSS (y compris via JavaScript), veiller à conserver la cohérence des contenus pour les présenter dans le même ordre avec ou sans mise en forme CSS. On évitera ainsi de se retrouver, par exemple, avec un menu coupé en deux si les feuilles de styles sont désactivées.

## Contrôle

Comparer visuellement les pages avec et sans application des styles CSS. L’opération nécessite de recourir, pour chaque page, à l’ensemble de ces méthodes :

* Désactiver les styles CSS dans le navigateur ;
* Vérifier l’absence de perte d’informations dont la cause peut alors être confirmée en examinant les styles appliqués à l’élément concerné à l’aide d’un inspecteur de code.
* Vérifier que les contenus restent lisibles, par exemple dans le cas d’une image HTML transparente dont la lisibilité dépendra de la couleur d’arrière-plan appliquée avec la propriété background-color.
* Vérifier la cohérence du contenu affiché sans CSS, qui doit rester logiquement organisé et parfaitement compréhensible. Par exemple, un organigramme constitué de différents blocs de texte mis en forme via des propriétés CSS de positionnement pourra apparaitre comme une succession de blocs de texte dénuée de sens en l’absence de CSS.


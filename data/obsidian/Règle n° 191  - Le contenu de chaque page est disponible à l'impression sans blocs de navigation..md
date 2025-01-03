
#Développement #Présentation #Écoconception

Imprimez une page web sur une feuille A4. Mettez votre doigt sur un des éléments des menus. Il ne se passe rien. C’est normal, à l’impression, les menus ne servent à rien. Pas la peine de les imprimer.


## Objectif

* Améliorer la lisibilité et la pertinence des contenus imprimés.
* Rationaliser l'espace utilisé par les contenus imprimés pour économiser du papier.
* Diminuer l'impact énergétique lié à la consultation du site

## Mise en œuvre

Fournir une feuille de style CSS pour le media print, qui masque les blocs de navigation via la propriété `display`.

## Contrôle

Cette vérification peut s'effectuer immédiatement en utilisant l'aperçu avant impression du navigateur :

* Vérifier qu'aucun menu ou autre bloc de navigation ne s'affiche dans l'aperçu avant impression de la page.

Les blocs de navigation peuvent être l'ensemble des menus `nav`, des éléments de `header` ou de pied de page tels qu'un formulaire de recherche ou des liens annexes, un formulaire d'inscription à une newsletter, etc.

En savoir plus: [`nav` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav) - [`header` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/header)


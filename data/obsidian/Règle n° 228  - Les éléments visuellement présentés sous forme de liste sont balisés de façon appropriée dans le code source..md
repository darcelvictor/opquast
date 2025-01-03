
#Accessibilité #Développement #Editorial #Structure_et_code

Pour un producteur de contenu, ajouter des tirets, des « \* » ou des puces sous forme d’images est fort tentant. Oui, mais la magie des éléments HTML et la compétence des navigateurs vous permettent déjà de faire des listes propres. Il suffit de le savoir.


## Objectif

* Permettre l’identification des listes par les navigateurs et les aides techniques et donc leur restitution appropriée afin de faciliter leur compréhension par les utilisateurs.
* Améliorer la sémantique du contenu des pages et sa réutilisabilité.

## Mise en œuvre

Soit utiliser les éléments HTML appropriés :

* `ul, li` pour les listes non ordonnées ;
* `ol, li`pour les listes ordonnées ;
* `dl, dt, dd` pour les listes de définitions ou de descriptions.

Soit recourir aux attributs ARIA permettant de donner la sémantique d’une liste non ordonnée ou ordonnée à un contenu balisé de manière plus générique :

* donner au conteneur de la liste un attribut `role="list"` ;
* donner à chaque élément de la liste un attribut `role="listitem"` ;
* (il n’existe pas d’équivalent aux listes de définitions via un rôle ARIA). 

En savoir plus: [`ul` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul) - [`ol` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol) - [`dl` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/dl)

## Contrôle

Pour chaque page contenant une liste :

* Contrôler le code source des contenus présentés sous forme de liste (caractérisés par la présence de retours à la ligne et de marqueurs de listes tels que des puces ou des numéros) à l’aide d’un inspecteur de code.
* Vérifier si le code source de ces listes apparentes comporte bien les éléments HTML correspondant au type de liste concerné : `ul, li` pour une liste non ordonnée (liste à puces), `ol, li` pour une liste ordonnée (liste numérotée) et `dl, dt, dd`npour une liste de définitions ou, à défaut, les rôles ARIA `list` et `listitem`.


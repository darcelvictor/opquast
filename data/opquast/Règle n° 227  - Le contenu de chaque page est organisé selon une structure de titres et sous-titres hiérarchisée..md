
Règle n° 227  - Le contenu de chaque page est organisé selon une structure de titres et sous-titres hiérarchisée.

#Basics #Accessibilité #Développement #Editorial #SEO #Structure_et_code

Les titres et sous-titres permettent aux navigateurs, moteurs et outils de vocalisation de restituer la structure d’une page. Ainsi, les utilisateurs peuvent accéder directement au contenu qui les intéresse.

Objectif
--------

*   Permettre aux utilisateurs qui le souhaitent de visualiser la structure du contenu de la page et d’y naviguer.
*   Permettre aux machines et aux outils d’indexation d’extraire le plan de chaque page.
*   Améliorer le référencement en facilitant l’interprétation du contenu par les robots d’indexation.

Mise en œuvre
-------------

Structurer le document en titres et sous-titres à l’aide des éléments HTML h1 à h6.

Veiller à ce que la structure ne comporte pas de « trous » : un titre de niveau h2 ne doit pas être suivi d’un titre h4, h5 ou h6, par exemple.

Veiller à ce que chaque page comporte au moins un titre de niveau 1 avec l’élément h1.

En savoir plus: [`h1`... `h6` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements)

Contrôle
--------

Dans chaque page, contrôler successivement :

*   la présence d’au moins un élément h1 correspondant au titre de la section principale du contenu de la page ;
*   la présence de sous-titres h2 à h6 (si nécessaire) correspondant aux titres des sous-sections de contenu principal de la page ;
*   l’absence d’interruption dans la succession descendante des titres h1 à h6, c’est-à-dire par exemple l’absence de titre h1 suivi d’un titre h3.

La vérification doit s’effectuer en tenant compte d’éventuels éléments de titres masqués à l’affichage ou bien de titres générés par JavaScript. On peut, à cet effet, utiliser la fonction d’affichage de la table des matières de la page disponible dans certains outils de développement.

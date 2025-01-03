
#Accessibilité #Développement #Editorial #Formulaires

Le contenu de certaines listes déroulantes est suffisamment homogène pour se suffire à lui-même, mais dans certains cas, la liste sera plus aisée à consulter en étant mieux organisée. Dans ce cas, l’élément optgroup est votre ami.


## Objectif

* Permettre aux aides techniques de restituer à l’utilisateur une liste dont l’organisation est clairement perceptible et qui facilite le passage d’un élément de la liste à un autre.
* Favoriser un rendu approprié des listes déroulantes complexes dans tous les navigateurs.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Utiliser l'élément `optgroup` pour baliser les regroupements thématiques d'éléments option dans les listes `select`.

Utiliser l'attribut `label` de l'élément `optgroup` pour afficher l'étiquette de chaque regroupement.

## Contrôle

Pour chaque liste déroulante :

* Ouvrir chaque liste (`select`) pour détecter celles qui nécessiteraient un regroupement d'éléments `option`, par exemple des regroupements de modèles de voitures classés par marques ou des regroupements de villes réalisés par département ;
* Vérifier, en examinant le code source à l'aide de Firebug, que chaque série d'éléments `option` qui devraient être regroupés est balisée avec l'élément `optgroup` ;
* Vérifier que chaque élément `optgroup` est doté d'un attribut `label` associant un libellé pertinent au groupe d'options concerné.



Règle n° 237  - Les titres des tableaux de données sont renseignés.

#Accessibilité #Développement #Editorial #Structure_et_code

Un tableau HTML peut être doté d’un titre. Ce dernier peut être affiché ou non, mais dans tous les cas, sa présence et sa pertinence sont importantes pour la compréhension du tableau.

Objectif
--------

*   Permettre aux utilisateurs d'aides techniques (lecteurs d'écran) d'identifier aisément la nature des informations fournies par un tableau.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Utiliser et renseigner l'élément HTML `caption` pour chaque tableau de données.

Le cas échéant, recourir à un élément `caption` masqué à l'affichage.

En savoir plus: [`caption` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/caption)

Contrôle
--------

Pour chaque tableau de données :

*   Vérifier la présence de l'élément `caption`. Si cet élément est masqué à l'affichage à l'aide d'une classe CSS, vérifier qu'il reste accessible pour les lecteurs d'écran ;
*   Contrôler la pertinence de l'élément `caption` qui doit permettre d'identifier la nature des informations apportées par le tableau.

Cette vérification peut être partiellement automatisée pour ce qui est de la présence de l'élément de titre `caption` mais le contrôle de sa pertinence nécessite un examen manuel.

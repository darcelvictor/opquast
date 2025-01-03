
Règle n° 078  - En cas de rejet des données saisies dans un formulaire, les raisons du rejet sont indiquées à l'utilisateur.

#Basics #Accessibilité #Conception #Développement #Formulaires

Ce qui peut sembler évident pour l’auteur d’un formulaire risque de l’être beaucoup moins pour ses utilisateurs : aidez-les à chaque fois que possible.

Objectif
--------

*   Aider l'internaute à comprendre ce qu'on attend et, ainsi, faciliter le passage à l'étape suivante.
*   Éviter la frustration de l'utilisateur face à une erreur dont il n'aurait pas la solution immédiate.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.

Mise en œuvre
-------------

Pour chaque champ contenant des données rejetées, indiquer la nature de l'erreur et fournir une aide à la correction

*   Soit en début de formulaire, dans une liste des champs erronés ;
*   Soit dans le contexte de chaque champ, autant que possible via leur étiquette `label`.

Contrôle
--------

Pour chaque formulaire examiné :

*   Soumettre les différentes erreurs possibles dans chaque formulaire absence de saisie d'un champ, non-respect d'un format demandé ou prévisible (format d'adresse mail, de date, etc.), sensibilité à la casse, etc.
*   Vérifier, si la saisie est rejetée, que la nature de l'erreur est précisée de manière à fournir l'aide nécessaire à sa correction, par l'un des moyens indiqués dans le paragraphe de mise en oeuvre.

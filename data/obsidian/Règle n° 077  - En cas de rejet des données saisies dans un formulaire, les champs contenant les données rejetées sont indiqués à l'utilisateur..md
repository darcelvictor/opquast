
#Basics #Accessibilité #Conception #Développement #Formulaires

Remplir un formulaire n’est pas toujours une tâche aisée : évitez à vos utilisateurs de devoir également partir à la recherche de leurs erreurs éventuelles.

Objectif
--------

*   Donner un retour à l'utilisateur sur l'action qu'il vient d'effectuer.
*   Guider l'utilisateur directement vers les éléments sur lesquels il doit agir.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Faire figurer en début de formulaire un message indiquant que tout ou partie des champs nécessite une correction de la saisie précédente. Indiquer également cette information dans l'élément `title` de la page.

Ajouter éventuellement au message en début de formulaire la liste des champs à corriger.

Indiquer explicitement dans l'étiquette de chaque champ concerné qu'il doit être corrigé.

Contrôle
--------

Pour chaque formulaire :

*   Soumettre différentes erreurs possibles dans chaque formulaire telles que absence de saisie d'un champ obligatoire, non-respect d'un format demandé ou prévisible (format d'adresse mail, de date, etc.), sensibilité à la casse.
*   Puis, vérifier que l'utilisateur est informé de la présence d'erreurs à corriger au moins dans l'élément `title` de la page et que chaque champ erroné est signalé via son étiquette.


#Accessibilité #Développement #Formulaires

Il est déjà contrariant de s’être trompé. Mais si en plus il faut tout recommencer parce que l’ensemble des données saisies a été effacé…

Objectif
--------

*   Laisser la main à l'utilisateur sur la totalité des informations qu'il donne.
*   Faciliter la correction des erreurs commises par l'utilisateur.
*   Permettre à l'utilisateur de modifier des informations sur lesquelles il voudrait revenir.
*   Éviter que l'utilisateur ne quitte le formulaire avant validation définitive.

Mise en œuvre
-------------

Stocker toutes les données saisies dans des variables de session afin de pouvoir les afficher de nouveau telles qu'elles ont été saisies dans les champs.

Rendre possible la modification des champs après rejet des données.

Contrôle
--------

Pour chaque formulaire audité

*   Provoquer le rejet de la saisie en soumettant les différentes erreurs possibles : absence de saisie d'un champ, non-respect d'un format demandé ou prévisible (format d'adresse mail, de date, etc.), sensibilité à la casse ;
*   Puis, vérifier que le formulaire est affiché de nouveau tel qu'il a été rempli, ceci afin de pouvoir éventuellement de le corriger.

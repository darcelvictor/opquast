
Règle n° 071  - L'utilisateur est averti lorsqu'une saisie est sensible à la casse.

#Accessibilité #Conception #Développement #Formulaires

Il est agaçant de devoir recommencer une saisie pour une erreur aussi simple à éviter. Mais encore fallait-il être au courant qu’il fallait taper uniquement en majuscules.

Objectif
--------

*   Éviter le risque d'erreur et donc éviter à l'utilisateur de devoir remplir plusieurs fois un même champ.
*   Éviter l'incompréhension de l'utilisateur qui pense avoir rempli correctement le champ et qui le voit signalé en erreur.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Si la saisie attendue est sensible à la casse, préciser dans l'étiquette associée au champ qu'elle doit être réalisée en majuscules ou en minuscules selon le cas.

Contrôle
--------

Pour chaque formulaire

*   Détecter les champs dont la saisie est sensible à la casse en inscrivant le texte demandé en majuscules puis en minuscules et contrôler si, dans l'un des deux cas, la saisie est rejetée ;
*   En cas de rejet de la saisie à cause de sa casse, vérifier que l'étiquette associée à chaque champ, via l'élément `label` ou dans l'attribut `aria-label`, informe l'utilisateur de cette sensibilité.

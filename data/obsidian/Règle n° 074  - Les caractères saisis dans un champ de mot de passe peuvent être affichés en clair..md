
#Basics #Accessibilité #Conception #Développement #Formulaires

Lorsque vous saisissez vos mots de passe, vous avez l’habitude de le faire dans des champs dédiés, où chaque caractère saisi est remplacé par un point ou une étoile. C’est bien, car cela évite la consultation au-dessus de votre épaule. Mais très souvent, notamment pour les mots de passe longs ou dans des contextes mobiles, cela peut être gênant. Dès lors, pourquoi ne pas donner la possibilité aux utilisateurs d’afficher leur mot de passe à leur demande, lorsqu’ils en ont besoin et qu’ils jugent que cela ne présente pas de risque en matière de confidentialité.

Objectif
--------

*   Faciliter la saisie des mots de passe, notamment sur les claviers virtuels des terminaux mobiles, ainsi qu'avec un lecteur d'écran.
*   Prévenir les erreurs.

Mise en œuvre
-------------

Afficher un bouton associé à un script qui bascule la valeur de l’attribut type du champ de saisie entre les valeurs `password` et `text`.

Contrôle
--------

Contrôler manuellement la possibilité d’afficher le mot de passe en clair via un dispositif inclus dans la page.

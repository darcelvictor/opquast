
#Accessibilité #Développement #Formulaires #Mobile

Dans les formulaires, il est possible de préciser quels sont les types de données attendues. Cela a de nombreux avantages. Cela permet aux systèmes d’exploitation mobile d’afficher des claviers adaptés ou de vérifier que les données respectent une forme ou une syntaxe. Bref, c’est souvent très intéressant.

Objectif
--------

*   Permettre l’utilisation des claviers virtuels adaptés aux différents types de saisie sur les terminaux mobiles.
*   Faciliter la validation de la saisie.
*   Améliorer la compatibilité avec les terminaux mobiles.

Mise en œuvre
-------------

Doter chaque élément input concerné d’un attribut type correspondant à la saisie attendue : `email`, `url`, `tel`, `number`, `search`, `password`, `date`, `time`.

Contrôle
--------

Vérifier, pour chaque élément input concerné, la présence de l’attribut type doté de la valeur correspondant au type de saisie attendue : `email`, `url`, `tel`, `number`, `search`, `password`, `date`, `time`.

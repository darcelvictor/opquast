
Règle n° 238  - La linéarisation des tableaux utilisés pour la mise en page ne nuit pas à la compréhension des contenus.

#Accessibilité #Développement #Structure_et_code

Une page vocalisée va être lue de manière linéaire, dans l’ordre où son contenu apparaît dans le code HTML. Il arrive alors que la linéarisation des tableaux de mise en page vienne casser le sens de la page.

Objectif
--------

*   Fournir un contenu compréhensible aux utilisateurs dont l'agent utilisateur ou l'aide technique (lecteur d'écran) ne permet pas de restituer la mise en forme initialement prévue à l'aide d'un tableau.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Regrouper dans une même cellule `td` les informations qui doivent être verticalement associées (ne pas les répartir dans des cellules placées dans des lignes successives du tableau).

En savoir plus: [`td` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/td)

Contrôle
--------

Pour chaque tableau de mise en forme, c'est-à-dire pour chaque tableau ne comportant pas de donnée reliée à des en-têtes de ligne ou de colonne :

*   Procéder à la linéarisation de l'affichage à l'aide d'un outils de développement.
*   Vérifier que le contenu linéarisé reste compréhensible, sans incohérence ni perte d'information.

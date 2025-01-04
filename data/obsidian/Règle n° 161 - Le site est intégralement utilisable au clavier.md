
#Basics #Accessibilité #Développement #Navigation

La souris n’est pas le mode exclusif de navigation sur un site. Les utilisateurs qui ne voient pas l’emplacement du pointeur visuel et ceux qui souhaitent naviguer au clavier doivent pouvoir eux aussi visiter votre site.


## Objectif

* Permettre la navigation au clavier pour les utilisateurs ayant une préférence pour cette pratique.
* Permettre la consultation des contenus et l'utilisation des services indépendamment du périphérique d'entrée.
* Améliorer l’accessibilité des contenus aux personnes handicapées.

## Mise en œuvre

Recourir à des gestionnaires d'événements universels en cas d'interaction basée sur Javascript (par exemple, `onclick` pour un lien `a` ou pour un champ ou contrôle de formulaire) ou, à défaut, compléter les gestionnaires d'événements non universels (`onmouseover` par exemple) par un second gestionnaire permettant l'accès clavier (`onfocus` par exemple) ou encore fournir un moyen d'accès alternatif.

## Contrôle

Cette vérification s'applique à l'ensemble des éléments interactifs : hyperliens, boutons, champs de formulaires, widgets Javascript, etc. Le mode d'interaction par défaut est la touche tabulation pour atteindre les liens, les champs et les contrôles, puis la touche entrée pour les activer. Dans certains widgets, un mode d'interaction spécifique peut être présent : barre d'espace pour valider, touches flèches pour se déplacer, touche d'échappement pour fermer ou sortir. Autant que possible dans ce cas, ces touches spécifiques devraient être indiquées à l'utilisateur.

Au sein de chaque page examinée :

* Vérifier que l'ensemble des interactions, liens, boutons, champs de formulaires, présents dans les pages sont utilisables au clavier, à l'exception de ceux pour lesquels cela n'aurait pas de sens, comme une fonctionnalité de tracé à la souris.



Règle n° 160  - Le focus clavier n'est ni supprimé ni masqué.

#Basics #Accessibilité #Conception #Développement #Navigation

Le focus clavier signale où se trouve le curseur dans une page. Pour le voir pendant que vous naviguez sur un site, appuyez sur la touche Tabulation de votre clavier, vous le verrez changer d’emplacement dans la page. Si vous ne le voyez pas, c’est peut-être que le créateur du site a eu la mauvaise idée de le supprimer ou de le masquer.

Objectif
--------

*   Permettre la navigation au clavier ou via des périphériques d'entrées ou des dispositifs qui ne reposent pas sur la souris.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.

Mise en œuvre
-------------

Veiller à ne pas masquer ou supprimer l'effet visuel de prise de focus qui indique quel est l'élément atteint lors de la navigation au clavier. En particulier, ne pas annuler la valeur par défaut de la propriété CSS `outline` sans la remplacer par une autre valeur personnalisée ou un effet visuel suffisamment perceptible.

Ne pas supprimer via Javascript la prise de focus clavier (exploitation de l'événement `onblur`).

Contrôle
--------

Ce contrôle s'effectue sur l'ensemble des éléments interactifs, prioritairement à l'aide de la touche tabulation et, dans l'interface de certains widgets, à l'aide de touches de déplacement spécifiques (touches flèches).

Pour chaque élément interactif contenu dans les pages examinées :

*   Vérifier que l'indication visuelle du focus par défaut du navigateur est au moins présente ou qu'une indication visuelle spécifique a été aménagée.

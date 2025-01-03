
#Accessibilité #Conception #Développement #Images_et_médias

Au début, ça va, et puis au bout d’un moment, ça énerve. Il fut un temps où dans au moins certains navigateurs, la touche Échap interrompait les GIF animés, sans toutefois permettre de les consulter pas à pas. Mais ce temps semble révolu, et surtout, mieux vaut demander aux administrateurs de sites de ne pas faire aux autres ce qu’ils ne voudraient pas qu’on leur fasse : outre les GIF animés, il y a les contenus défilants, les machins qui clignotent, etc. Sans compter les grosses basses qui font sursauter tout l’open space.

Objectif
--------

*   Laisser à l'utilisateur le contrôle des animations lors de la consultation du contenu.
*   Ne pas perturber l'attention en imposant des éléments pouvant gêner celle-ci.
*   Permettre la consultation pas à pas d'animations séquentielles ou de contenus sonores.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Dès lors qu'une animation visuelle a une durée de plus de 5 secondes ou qu'un son a une durée de plus de 3 secondes, doter systématiquement l'objet multimédia des moyens de contrôle nécessaires : démarrage, arrêt, muet ou volume.

Ne pas utiliser de graphismes animés non contrôlables, ou encore partiellement contrôlables par l'utilisateur (images gif animées en particulier).

Contrôle
--------

Dans chaque page contenant une animation visuelle d'une durée de plus de 5 secondes ou un son d'une durée de plus de 3 secondes :

*   Contrôler la possibilité de stopper l'animation, le son ou le clignotement (pause, redémarrage, volume sonore le cas échéant).

Il existe une grande variété de moyens techniques permettant d'inclure une animation dans une page : balisage, propriété CSS, images animées, Javascript, SVG, etc. La vérification de cette bonne pratique nécessite donc un examen au cas par cas de chaque page concernée.

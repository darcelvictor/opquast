
Règle n° 113  - Chaque image porteuse d'information est dotée d'une alternative textuelle appropriée.

#Basics #Accessibilité #Développement #Editorial #Images_et_médias #SEO

Certaines images ne se contentent pas d’être jolies ou moches. Elles apportent de vraies informations. C’est le cas du texte mis en image, mais aussi d’images présentant des informations visuelles nécessaires ou utiles à la compréhension du contenu. Dans ce cas, faites-en sorte que les informations ne soient pas perdues lorsque l’image est désactivée.

Objectif
--------

*   Permettre aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d'écran, navigateur avec images désactivées) de comprendre le sens des images qu'ils ne peuvent voir.
*   Permettre aux robots d'exploiter l'information véhiculée par les images (référencement, indexation, traduction automatique des alternatives d’images-texte).
*   Permettre l'affichage d'un texte pendant le chargement des images.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

*   Donner à chaque élément img concerné un attribut alt reproduisant l’information.
*   Donner à chaque élément area concerné un attribut alt reproduisant l’information.
*   Reproduire l’information dans le contenu de chaque élément object concerné.
*   Reproduire l’information dans le contenu de chaque élément canvas concerné.
*   Reproduire l’information dans un libellé textuel associé à chaque élément svg concerné par le biais de son attribut aria-label ou de la balise desc.

Dans le cas d’une image complexe qui ne peut être résumée de manière concise dans une alternative textuelle, le détail de l’information doit être apporté en complément à l’aide d’une description étendue :

*   soit via l’attribut longdesc de l’image indiquant l’URL de la description,
*   soit via un lien adjacent à l’image jouant le même rôle,
*   soit dans le contenu de la page, dans le contexte immédiat de l’image. Dans ce dernier cas, l’alternative peut signaler la présence de cette description et y renvoyer.

  

Contrôle
--------

*   Vérifier que l’attribut alt de chaque élément img concerné reproduit l’information portée par l’image.
*   Vérifier que l’attribut alt de chaque élément area concerné reproduit l’information portée par l’image.
*   Vérifier que le contenu de chaque élément object concerné reproduit l’information portée par l’image.
*   Vérifier que le contenu de chaque élément canvas concerné reproduit l’information portée par l’image.
*   Vérifier que chaque élément svg concerné est associé à un libellé textuel reproduisant l’information portée par l’image par le biais de son attribut aria-label ou de la balise desc.
*   Vérifier la présence et la pertinence de la description étendue le cas échéant.

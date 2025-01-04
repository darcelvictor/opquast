
#Basics #Accessibilité #Développement #Editorial #Images_et_médias #SEO

Aimeriez-vous naviguer sur un site dont les liens seraient libellés « 42.gif », « logo » ou « 148572156725.jpg » ? Non, n’est-ce pas ? Alors, évitons d’imposer non seulement cela aux utilisateurs de lecteurs d’écran, mais aussi à Google, qui va, du coup, trouver vos contenus bien peu pertinents et bien difficiles à référencer.


## Objectif

* Permettre aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) de comprendre le sens des liens présents sur des images qu’ils ne peuvent voir.
* Permettre aux robots d’exploiter l’information véhiculée par les images-liens (pour le référencement, l’indexation, la traduction automatique des alternatives d’images-texte).
* Permettre l’affichage d’un texte pertinent pendant le chargement des images.
* Améliorer l’accessibilité des contenus aux personnes handicapées.
* Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

## Mise en œuvre

Les images-liens sont aisées à identifier (elles sont le seul contenu qui est placé entre des balises \<a> et \</a>). Il faut toutefois penser aussi aux liens générés avec JavaScript sur d’autres éléments.

D’une manière générale, il faut :

* donner à chaque élément img concerné un attribut alt indiquant la cible ou le rôle du lien ;
* donner à chaque élément area concerné un attribut alt indiquant la cible ou le rôle du lien ;
* indiquer la cible ou le rôle du lien dans le contenu de chaque élément object concerné ;
* indiquer la cible ou le rôle du lien dans le contenu de chaque élément canvas concerné.

## Contrôle

* Vérifier que l’attribut alt de chaque élément img concerné indique la cible ou le rôle du lien.
* Vérifier que l’attribut alt de chaque élément area concerné indique la cible ou le rôle du lien.
* Vérifier que le contenu de chaque élément object concerné indique la cible ou le rôle du lien.
* Vérifier que le contenu de chaque élément canvas concerné indique la cible ou le rôle du lien.
* Vérifier le libellé textuel de tout autre élément ayant le rôle d’un lien.



#Développement #Images_et_médias #Écoconception

Le langage HTML permet d’indiquer pour une image des dimensions différentes de celles de l’image d’origine. Cela permet notamment de faire des vignettes et aperçus d’image. Par exemple, vous pouvez parfaitement afficher une image carrée de 100 pixels de côté alors qu’il s’agit d’une image carrée de 5000 pixels de côté dont vous vous êtes contenté de redimensionner l’affichage en HTML. L’affichage est petit mais la quantité de données à télécharger reste le même. Et cela nuit directement aux performances du site.


## Objectif

* Diminuer la quantité de données à télécharger.
* Améliorer la vitesse d’affichage de la page.
* Diminuer l'impact énergétique lié à la consultation du site.

## Mise en œuvre

Utiliser, pour les vignettes de prévisualisation d'images, des versions spécifiques de celles-ci et non les images originales redimensionnées via leurs attributs HTML ou leurs propriétés CSS.

## Contrôle

Pour toutes les images HTML présentes dans le code source ou générées via javascript :

* Vérifier qu'elles ne sont pas dotées de propriétés CSS `height` ou `width` qui modifient la taille apparente des images par rapport à leurs dimensions réelles. Pour cela, utiliser désactiver tous les styles CSS à l'aide d'un outil de développement web pour repérer les images dont les dimensions changent après désactivation des styles CSS.
* Contrôler également que les dimensions indiquées dans les attributs `width` et `height` du code HTML généré correspondent aux dimensions réelles de l'image à l'aide d'un outils de développement.

Par exemple, on invalidera donc :

* Une image du type \<img height="300" width="600" class="thumb"/> si la classe `.thumb` impose les propriétés CSS `height: 100px` et `width: auto`.
* Une image du type \<img height="100" width="200"/> si les dimensions réelles de l'image sont 300 px de haut et 600 px de large.


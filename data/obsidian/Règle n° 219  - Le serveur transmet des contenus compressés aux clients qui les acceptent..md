
#Basics #Développement #Serveur_et_performances #Écoconception

Il s’agit d’un moyen particulièrement efficace d’accélérer le temps d’accès à une page et de réduire le coût de bande passante : il est possible de configurer un serveur pour qu’il envoie des pages compressées (dans un format proche de celui d’une archive .zip). Les contenus sont alors « dézippés » à la volée et de manière totalement transparente sur le poste de l’utilisateur.


## Objectif

* Améliorer la vitesse de rendu de la page.
* Diminuer les coûts de bande passante.
* Diminuer l'impact énergétique lié à la consultation du site

## Mise en œuvre

Activer le module Gzip ou Deflate du serveur pour compresser les ressources Javascript, CSS et HTML.

## Contrôle

Pour chaque page examinée :

* Vérifier la compression des contenus (Gzip) à l'aide d'un outil dédié.

Attention à bien vérifier tous les éléments liés (CSS, JS, HTML) et pas seulement la page en elle-même. Les formats déjà compressés comme les images JPEG ou PNG ou les archives zip, par exemple, ne doivent pas être recompressés.

Si la taille avant compression d'un élément est inférieure à 1 Ko, il n'est pas nécessaire de le compresser, au risque de voir son poids augmenter.


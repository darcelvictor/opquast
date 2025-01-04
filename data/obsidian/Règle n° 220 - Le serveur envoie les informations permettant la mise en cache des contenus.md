
#Basics #Développement #Serveur_et_performances #Écoconception

Un serveur peut accompagner l’envoi d’une page HTML ou d’un fichier image, Java- Script, CSS ou autre, ainsi que des informations permettant leur mise en cache sur le poste utilisateur. Pour cela, il est nécessaire de le configurer correctement, et tout le monde y gagne.


## Objectif

* Accélérer l'affichage des contenus et permettre une navigation plus fluide.
* Réduire les coûts de bande passante.

## Mise en œuvre

Configurer le serveur web pour qu’il puisse gérer la mise en cache des éléments statiques et gérer – au niveau applicatif – la possible mise en cache des éléments dynamiques.

En pratique, et en accord avec les spécifications HTTP, le serveur devra envoyer les en-têtes etag, date et last-modified correspondant, respectivement, à l’identifiant de la ressource, à la date de traitement de la requête et à la date de dernière modification de la ressource demandée. L’ensemble des dates est au format GMT. Ces informations peuvent être complétées par les champs content-length et expires si la taille en octets et la date d’expiration exacte du contenu sont connues.

Afin d’informer les proxys et les clients finaux sur le comportement à adopter vis-à-vis des contenus mis en cache, les auteurs devront utiliser l’en-tête HTTP cache-control en accord avec les délais de réactualisation nécessaires et le caractère privé de la diffusion.

La possible mise en cache pourra être ainsi finalisée par la soumission d’un message 304 Not Modified (sans la ressource demandée dans le corps de la requête) lorsque le serveur recevra un en-tête if-modified-since contenant une date antérieure à la date de modification de ladite ressource.

## Contrôle

Pour chaque page : vérifier la possible mise en cache des éléments de la page à l’aide d’un outil dédié (outils de développement, service en ligne, etc.) Attention à bien vérifier tous les éléments liés (CSS, JS, images) et pas seulement la page en elle-même.


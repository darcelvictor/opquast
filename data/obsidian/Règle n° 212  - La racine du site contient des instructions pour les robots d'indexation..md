
#Basics #Développement #SEO #Serveur_et_performances #Écoconception

Les robots sont des programmes informatiques qui analysent et parcourent vos pages. Les plus connus sont ceux des moteurs de recherche, qui indexent les contenus. Ces robots peuvent recevoir des instructions pour les guider dans leur indexation, il suffit de mettre en place un fichier appelé robots.txt à la racine de votre site et de respecter une syntaxe particulière dans ce fichier.


## Objectif

* Permettre un référencement ciblé.
* Améliorer le guidage des outils de recherche.
* Diminuer l'impact énergétique lié à la consultation du site.
* Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

## Mise en œuvre

Pour définir les répertoires, fichiers ou types de fichiers non indexables, utiliser les instructions `user-agent` et `disallow` dans un fichier texte unique appelé `robots.txt`, placé dans le répertoire racine du site.

Alternativement, pour agir au niveau d'une page spécifique, utiliser dans celle-ci la balise `meta name="robots" content="attribut1, attribut2"` :

* attribut1 peut prendre les valeurs `index` (indexer cette page) ou `noindex` (ne pas indexer cette page) ;
* attribut2 peut prendre les valeurs `follow` (suivre les liens contenus dans cette page) ou `nofollow` (ne pas suivre les liens).

En savoir plus: [`meta` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta)

## Contrôle

À partir de l'adresse URL de votre site :

* Accéder tout d'abord à l'adresse du fichier robots.txt, à la racine du site, en tapant par exemple <http://example.com/robots.txt> dans la barre d'adresse du navigateur ;
* Vérifier la présence du fichier `robots.txt` placé dans le répertoire racine du site ;
* Vérifier la validité de la syntaxe du fichier `robots.txt` à l'aide des indications données par les moteurs de recherche

En l'absence de fichier `robots.txt` vérifier la présence et la validité de la balise `meta name="robots" content="attribut1, attribut2"` dans chaque page.



#Développement #Sécurité

Lorsqu’un répertoire du site ne contient pas de page d’accueil en front (le répertoire des images du site, par exemple), il arrive qu’il soit possible d’afficher son contenu. Par exemple, en cas de non-respect de cette bonne pratique, une Url comme domaine.com/ doc/ peut permettre l’accès à la liste complète des documents du site, et ce, même s’ils ne sont pas en ligne. C’est embêtant, n’est-ce-pas ?


## Objectif

* Éviter l'affichage de listes de fichiers contenus dans un répertoire.
* Améliorer la sécurité du serveur.
* Limiter les risques d'intrusion.

## Mise en œuvre

Configurer le serveur pour qu'il ne renvoie pas la liste des fichiers présents dans un répertoire. Pour Apache, ajouter par exemple `options –indexes` dans le `.htaccess`.

## Contrôle

Pour chaque site audité :

* Contrôler que l'appel à un répertoire sans page par défaut – comme le répertoire des images, des scripts JS ou des feuilles de style – ne renvoie pas la liste du contenu de ce dossier (cette action peut en revanche mener à une page d'erreur ou à une redirection).


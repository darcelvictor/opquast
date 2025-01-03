
#Basics #Conception #Développement #Identification_et_contact

L’icône de favori est la petite image qui s’affiche dans votre navigateur et dans vos marques-pages ou favoris. Elle mérite d’être bien traitée car elle joue un rôle important dans l’identification durable de votre site.

Objectif
--------

*   Améliorer l'identification visuelle du site et de ses pages.
*   Faciliter l'identification dans le navigateur et dans les favoris ou signets.
*   Permettre l'affichage, l'appel, et la mémorisation éventuelle de l'icône de favori par tous les navigateurs.

Mise en œuvre
-------------

Selon le format choisi pour l'icône et son emplacement, utiliser un lien du type :

*   <link rel="icon" type="image/png" href="/img/favicon.png"/> (format png, mais aussi jpg, gif, etc.) ;
*   <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" /> (format ico Microsoft seul reconnu par Internet Explorer).

Contrôle
--------

Dans le code source de chaque page examinée :

*   Vérifier, à l'aide d'un outil de développement web ou d'un inspecteur de code, que l'élément `link rel` est présent dans l'en-tête de page `head` ;
*   Vérifier que sa syntaxe est de la forme :

<link rel="icon" type="image/png" href="/img/favicon.png"/> pour les formats png, mais aussi jpg, gif, etc. ;

ou <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" /> pour le format ico Microsoft.

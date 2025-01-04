
#Basics #Développement #Sécurité

Le serveur envoie une page contenant divers éléments (fichiers JavaScript, CSS, webfonts, etc.) au navigateur, qui va se charger de télécharger et d’afficher le tout, le mieux et le plus vite possible… sans se poser de questions sur la légitimité de ce qu’il fait. Le système nommé Content Security Policy permet d’indiquer au navigateur des règles concernant l’origine de ces contenus. Cela permet de déterminer précisément ce qu’il aura le droit d’exécuter ou d’afficher, et cela renforce donc la sécurité pour les utilisateurs.


## Objectif

* Réduire les risques d’exécution ou d’affichage d’un contenu non désirable ou d’une source non autorisée.

## Mise en œuvre

Activer l’en-tête HTTP Content-Security-Policy avec les directives CSP 1 appropriées :

* img-src pour les images ;
* script-src pour le JavaScript ;
* style-src pour les styles CSS ;
* font-src pour les webfonts ;
* etc.

## Contrôle

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de l’en-tête Content-Security-Policy.


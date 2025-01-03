
#Développement #SEO #Serveur_et_performances

Un serveur web ne peut pas vous servir un verre, il va vous servir des pages web. Et avant de vous les servir, il va vous donner des tas d’informations, dans ce qu’on appelle les en-têtes (headers). Ici est exposée une des informations que doit contenir l’en-tête d’une page pour garantir un rendu fiable.

Objectif
--------

*   Permettre au navigateur de choisir le bon encodage des caractères pour afficher la page.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Le paramètre `charset` de l'en-tête HTTP content-type est renseigné sous la forme : `Content-Type: text/html; charset=utf-8` (utf-8 étant ici un exemple), en fonction du jeu de caractères effectivement utilisé par le document et de son type MIME.

Contrôle
--------

Pour chaque page examinée :

*   Vérifier la présence du `charset` dans le champ content-type renvoyé par le serveur avec un outil dédié ;
*   Vérifier que le jeu de caractères déclaré correspond effectivement au jeu de caractères utilisé par le document. En présence de caractères non corrects à la place des accents ou autres, la bonne pratique sera certainement invalidée.

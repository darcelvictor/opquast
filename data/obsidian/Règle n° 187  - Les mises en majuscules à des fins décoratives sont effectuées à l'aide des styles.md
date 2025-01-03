
#Accessibilité #Développement #Editorial #Présentation

Il est parfaitement possible d’écrire un texte web en minuscules et de l’afficher en majuscules avec les styles CSS. De cette façon, l’utilisateur reste libre d’en faire ce qu’il veut. Sachez également qu’un texte en majuscules se lit moins rapidement.

Objectif
--------

*   Permettre un copier-coller des contenus indépendamment de la mise en forme entièrement en majuscules.
*   Faciliter l'adaptation de la mise en forme pour les utilisateurs ayant des difficultés de lecture des textes entièrement en majuscules.

Mise en œuvre
-------------

Saisir les contenus HTML en respectant l'usage typographique pour les majuscules (début de phrase, noms propres, etc.).

Utiliser la propriété CSS `text-transform` avec la valeur `uppercase` pour gérer les mises en majuscules décoratives.

Contrôle
--------

Pour tous les contenus mis entièrement en majuscules :

*   Désactiver le support des styles du site dans le navigateur ;
*   Identifier les textes qui apparaissent en majuscules lorsque les styles sont désactivés ;
*   Vérifier que l'usage des majuscules respecte le cadre des conventions typographiques de la langue utilisée. Par exemple : les sigles ou noms d'auteurs dans une bibliographie peuvent être en majuscules.

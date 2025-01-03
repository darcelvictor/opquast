
#Accessibilité #Conception #Présentation

Cette règle consiste à ne pas faire référence à un contenu ou à une fonctionna- lité uniquement par sa couleur. Par exemple, le caractère obligatoire d’un champ de formulaire signalé en rouge pourra ne pas être perçu par tous.

Objectif
--------

*   Permettre l’accès à l’information pour les utilisateurs dont le navigateur, la plate-forme, l’aide technique ou encore le handicap (comme le daltonisme) ne permettent pas de visualiser ou de différencier les couleurs.
*   Rendre l’information accessible aux robots d’indexation.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Fournir un complément à la couleur pour véhiculer l’information qu’elle porte. Ce complément, indépendant de la couche de mise en forme CSS, peut être de plusieurs ordres :

*   Prévoir un balisage sémantique (strong, em, etc.) ;
*   Ajouter des mentions textuelles (astérisque signalant un champ obligatoire) ;
*   Ajouter des hachures, motifs, bordures, etc. dans les cartes et les graphiques.

Contrôle
--------

La vérification nécessite de comparer visuellement deux versions de la page : la version normale et une version où les couleurs seront désactivées. Elle est donc plus aisée à mener avec un double écran. Pour chaque page examinée :

*   Désactiver le support de la couleur via votre barre d’outils de test puis passer les images en niveau de gris.
*   Vérifier par comparaison si la version sans couleurs présente des pertes d’information. Ce sera par exemple le cas dans un menu de navigation où la rubrique en cours ne se différencie que par sa couleur, ou encore dans une carte dont les zones sont de simples aplats de couleur sans bordure ni motifs.

Attention : l’information peut parfois être présente indépendamment de la couleur dans un attribut title, provoquant l’apparition d’une infobulle au survol du contenu. L’accès à l’infobulle depuis le clavier n’étant à ce jour pas possible par défaut dans tous les navigateurs, cette solution doit être écartée.


Règle n° 208  - Le serveur ne communique pas d'informations sur les logiciels et langages utilisés.

#Développement #Sécurité

Les vrais informaticiens connaissent la vérité : il n’existe pas de logiciel ou d’outil informatique sécurisé à 100%. Chaque version de logiciel utilisé de manière importante -et c’est le cas de la plupart des logiciels serveurs, systèmes de gestion de contenus et même des formats utilisés sur le Web présente un certain nombre de défauts. Utiliser telle ou telle version d’un logiciel peut aiguiller directement une personne mal intentionnée vers une faille de sécurité documentée. Votre serveur peut être configuré pour annoncer à tout le monde qu’il tourne avec la version X du logiciel Y. Ou alors, vous veillez à respecter cette règle et il sera muet comme un carpe.

Objectif
--------

*   Prévenir les risques d’intrusion sur le serveur.
*   Prévenir l’apparition de contenus ou scripts malveillants sur le site.

Mise en œuvre
-------------

Ne communiquer via les entêtes HTTP envoyés par le serveur aucune information sur les logiciels et langages utilisés côté serveur, en particulier via les entêtes Server, X-Powered-By et X-AspNet-Version.

Contrôle
--------

Vérifier que les les entêtes HTTP envoyés par le serveur ne donnent aucune information sur les logiciels et langages utilisés côté serveur.

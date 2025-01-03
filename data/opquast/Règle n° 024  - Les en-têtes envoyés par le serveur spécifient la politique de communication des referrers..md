
Règle n° 024  - Les en-têtes envoyés par le serveur spécifient la politique de communication des referrers.

#Données_personnelles #Développement #Privacy

Les serveurs Web passent leur temps à enregistrer tout un tas d’informations sur les utilisateurs. Ces données sont inscrites dans ce l’on appelle des fichiers logs. C’est très pratique voire vital pour analyser l’audience, pour repérer des erreurs et c’est essentiel pour les développeurs. En revanche, parmi les infos qui sont transmises en permanence, il y a la page d’origine.

Objectif
--------

*   Protéger les utilisateurs de la divulgation d’éventuelles informations sensibles concernant leur navigation.
*   Sécuriser le chargement des ressources externes.
*   Maîtriser les informations transmises par le serveur.
*   Renforcer la confiance des utilisateurs sur l’utilisation de leurs données

Mise en œuvre
-------------

Pour chaque page du site, configurer le serveur pour envoyer l'entête HTTP Referrer-Policy avec comme valeur, par ordre de préférence :

*   `no-referrer`
*   `same-origin`
*   `strict-origin`
*   `strict-origin-when-cross-origin`

Contrôle
--------

Vérifier pour chaque page du site, la présence de l'entête HTTP Referrer-Policy avec comme valeur, par ordre de préférence :

*   `no-referrer`
*   `same-origin`
*   `strict-origin`
*   `strict-origin-when-cross-origin`

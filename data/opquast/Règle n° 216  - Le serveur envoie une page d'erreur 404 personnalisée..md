
Règle n° 216  - Le serveur envoie une page d'erreur 404 personnalisée.

#Basics #Accessibilité #Conception #Développement #Serveur_et_performances

Les erreurs sont inévitables. Même en vérifiant vos liens toutes les dix minutes, un internaute peut toujours taper indxe.html au lieu de index.html. La page d’erreur 404 est donc l’une des pages les plus importantes de votre site. Certaines agences y apportent un soin tout particulier. Ne l’oubliez pas, c’est un signe de professionnalisme.

Objectif
--------

*   Informer l'utilisateur sur l'erreur rencontrée, sur la continuité de fonctionnement du serveur
*   Lever le doute sur un éventuel problème lié à sa connexion.

Mise en œuvre
-------------

Modifier la configuration du serveur web pour renvoyer l'utilisateur vers une page personnalisée lorsque la ressource demandée n'existe pas.

Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par répertoire. Par exemple, l'environnement Apache autorise la création d'un fichier `.htaccess` contenant des directives relatives aux traitements des erreurs : `ErrorDocument 404 /mapage404.html`.

Contrôle
--------

À partir de n'importe quelle adresse url du site examiné :

*   Modifier l'adresse URL afin d'obtenir une erreur 404, par exemple, en ajoutant une série caractères aléatoires en fin d'adresse tel que : https://www.exemple.com/dbvdjb
*   Vérifier que la page retournée correspond à une page personnalisée, cohérente avec le reste du site, et non pas à la page 404 envoyée par défaut par le serveur (Apache, IIS, Nginx) ;
*   Dans le cas de l'utilisation d'un CMS, ce dernier peut vous faire croire qu'il ne renvoie pas la page 404 par défaut, il faudra donc effectuer la même vérification via l'adresse URL d'une image ou d'un fichier CSS ou encore JS pour valider définitivement cette bonne pratique.

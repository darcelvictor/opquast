
#Basics #Données_personnelles #Développement #Editorial

Il est parfaitement possible, pour un informaticien de niveau moyen, d’intercepter des données circulant sur le réseau. Le chiffrement des données constitue une mesure minimale de sécurité.


## Objectif

* Conforter la confiance de l'utilisateur.
* Permettre à l'utilisateur de saisir des données sensibles en sachant qu'elles seront protégées.
* Minimiser les risques d'utilisation frauduleuse des données des utilisateurs.
* Renforcer la confiance des utilisateurs sur l’utilisation de leurs données

## Mise en œuvre

Recourir à un certificat de sécurité informatique dans une version supportée par les versions récentes des navigateurs.

Recourir à un service tiers d'authentification décentralisé du type OpenID.

## Contrôle

Une page sécurisée se reconnaît à son URL qui commence par https\:// ou à la présence d'un élément visuel dans le navigateur (apparition d'un cadenas, changement de couleur de la barre de saisie de l'URL).

Pour tout site proposant d'échanger des données sensibles :

* Saisir l'adresse URL du site en http (pas en https), sans être identifié, et vérifier que vous êtes directement redirigé vers la version HTTPS du site et que tous les échanges sont sécurisés ;
* Au minimum, vérifier que les échanges de données sensibles (pages de saisie d'identifiants, de données personnelles ou bancaires, etc.) sont en HTTPS ;
* Dans le cas où les données sont saisies dans une page non sécurisée, vérifier dans le code source du formulaire qu'une adresse en HTTPS est présente au sein de l'attribut action, ce qui prouve que les données sont envoyées vers une page sécurisée.

Attention, la troisième option n'offre pas un niveau de sécurité équivalent aux deux premières et peut être tolérée dans le cas de données personnelles, voire d'identifiants mais jamais pour des données très sensibles (biométriques ou bancaires, par exemple).


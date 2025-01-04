
#Données_personnelles #Développement

Des données personnelles peuvent être transmises et interceptées par l’intermédiaire des URL. Des adresses du type https://domaine.com/index.html?motpasse=lapin sont à proscrire. Elles sont en effet faciles à repérer sur Internet ou dans les statistiques d’audience.


## Objectif

* Éviter que des données sensibles ne soient publiques et stockées en clair aux différentes étapes de l'accès à la page (FAI, proxy, serveur Web, historique du navigateur, services tiers…).
* Permettre à l'utilisateur de saisir des données sensibles en sachant qu'elles seront protégées et confidentielles.
* Renforcer la confiance des utilisateurs sur l’utilisation de leurs données

## Mise en œuvre

Envoyer les données de formulaire sensibles par la méthode `POST`.

Ne pas inscrire de données sensibles dans l'URL d'un lien.

## Contrôle

Lors de manipulations dans le site telles que connexion à un compte, saisie de données personnelles, achat, etc., vérifier qu'aucune des données saisies n'apparaît en clair dans l'URL via les trois contrôles suivants :

* Vérifier que l'identification n'aboutit pas à une page du typelogin.php?user=machin@password=123 ;
* Contrôler aussi que les pages ne comportent pas de liens contenant ce type d'informations. Il est en effet possible de faire un lien du type http://user:pass@example.com/ ou ftp://user:pass@example.com/. Ceci est bien évidemment très fortement déconseillé et doit être banni.
* Examiner également que l'identifiant de la session n'est pas transmis dans l'URL, ce qui donne des URL du type page.php?SESSIONID=123abc456def. Toute personne récupérant cet identifiant, y compris en lisant par-dessus l'épaule de l'utilisateur, aurait accès à son compte.

Il est important de faire ces tests en activant et désactivant les cookies du navigateur, certains outils (frameworks, CMS) ayant la fâcheuse habitude de transmettre les informations en clair dans le second cas.


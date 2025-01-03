
#Basics #Développement #Sécurité

Selon Wikipédia, que nous nous refusons à paraphraser ici : « HTTP Strict Transport Security (HSTS) est un mécanisme de politique de sécurité proposé pour HTTP, permettant à un serveur web de déclarer à un agent utilisateur (comme un navigateur web), compatible, qu'il doit interagir avec lui en utilisant une connexion sécurisée (comme HTTPS) ». En résumé, cela signifie que votre serveur est configuré pour ne communiquer avec l’utilisateur que de manière chiffrée. Il s’agit donc d’un niveau de sécurité supplémentaire par rapport au fait d’utiliser HTTPS. Non seulement le serveur parle en HTTPS, mais il refuse de parler de toute autre façon.


## Objectif

* Améliorer la sécurité des échanges.
* Prévenir les risques d’attaques.

## Mise en œuvre

Utiliser pour chaque page l'entête HTTP Strict Transport Security et son paramètre max-age pour spécifier que le navigateur doit convertir toutes les requêtes en HTTP en requêtes HTTPS.

## Contrôle

Vérifier que le serveur envoie pour chaque page l'entête HTTP Strict Transport Security avec le paramètre max-age spécifiant la durée pendant laquelle le navigateur doit convertir toutes les requêtes en HTTP en requêtes HTTPS


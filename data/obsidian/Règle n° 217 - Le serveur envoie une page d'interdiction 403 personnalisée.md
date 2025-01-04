
#Basics #Accessibilité #Conception #Développement #Serveur_et_performances

Lorsque l’internaute essaye de consulter une page interdite (demande d’affichage du contenu d’un répertoire, par exemple), le serveur n’envoie pas une page 404 (not found) mais 403 (forbidden), fort peu sympathique. Comme dans le cas de l’erreur 404, cette page peut être personnalisée aux couleurs du site visité.


## Objectif

* Rassurer l'internaute sur le fait qu'il est toujours dans le même site.
* Permettre à l'administrateur du site de mettre des éléments de guidage pour l'utilisateur.
* Informer l'utilisateur sur l'erreur rencontrée, sur la continuité de fonctionnement du serveur et mettre hors de cause sa connexion.

## Mise en œuvre

Modifier la configuration du serveur web pour renvoyer l'utilisateur vers une page personnalisée lorsque l'accès à la ressource demandée n'est pas autorisé.

Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par répertoire. Par exemple, l'environnement Apache autorise la création d'un fichier `.htaccess` contenant des directives relatives aux traitements des erreurs : `ErrorDocument 403 /mapage403.html`.

## Contrôle

Pour chaque site audité :

* Obtenir une page d'erreur 403, pour cela, vous pouvez retirer la dernière partie de l'adresse url d'une des images du site pour ne garder que le nom des répertoires présents entre les slashs de cette adresse, par exemple : https://www.exemple/com/img/. La page affichée devrait alors être une page d'erreur 403.
* Vérifier que la page retournée ne correspond pas à la page 403 renvoyée par défaut par le serveur (Apache, IIS, Nginx) mais bien à une page d'erreur personnalisée, dont le graphisme est cohérent avec l'ensemble du site.


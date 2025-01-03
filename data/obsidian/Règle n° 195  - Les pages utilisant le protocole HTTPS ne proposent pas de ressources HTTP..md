
#Développement #Sécurité

Lorsque les utilisateurs naviguent sur les sites proposant HTTPS, les utilisateurs voient s’afficher un cadenas. Lorsque le site propose dans la même page certaines ressources en http et d’autres en HTTPS, le navigateur pourra afficher une alerte de sécurité concernant le site visité. Lorsque vous proposez un site en HTTPS, veillez bien à ce que toutes les ressources appelées soient également en HTTPS


## Objectif

* Prévenir les alertes de type "site non sécurisé" dans les outils de consultation.
* Améliorer la sécurité pour l’ensemble des ressources du site.

## Mise en œuvre

Pour chaque page du site envoyée par le serveur en HTTPS, fournir toutes les ressources qui la composent (images, fichiers CSS, JS, etc.) via le protocole HTTPS et non via HTTP.

## Contrôle

Pour chaque page du site envoyée par le serveur en HTTPS, vérifier qu'aucune des ressources qui la composent (images, fichiers CSS, JS, etc.) n'est fournie via le protocole HTTP.


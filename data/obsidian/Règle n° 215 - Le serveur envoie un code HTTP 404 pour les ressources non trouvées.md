
#Développement #SEO #Serveur_et_performances #Écoconception

Il ne s’agit pas seulement d’informer votre visiteur d’une erreur d’adresse : c’est aussi utile pour différents outils tels que les moteurs de recherche. L’appel d’une adresse en erreur devrait systématiquement donner lieu à une réponse 404 (not found) par le serveur. Curieusement, dans certains cas, le serveur ou le CMS utilisé renvoient une page d’erreur 404 accompagnée d’un code 200 (qui signifie « OK, tout va bien »).


## Objectif

* Permettre la détection automatisée des URL erronées.
* Transmettre au navigateur une information sûre.
* Diminuer l'impact énergétique lié à la consultation du site.
* Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

## Mise en œuvre

Modifier la configuration du serveur web pour renvoyer l'utilisateur vers une page personnalisée lorsque la ressource demandée n'existe pas.

Si la configuration principale du serveur n'est pas directement accessible et si l'environnement le permet, utiliser une configuration locale par répertoire. Par exemple, l'environnement Apache autorise la création d'un fichier `.htaccess` contenant des directives relatives aux traitements des erreurs : `ErrorDocument 404 /mapage.html`.

## Contrôle

Pour chaque site examiné :

* Taper l'adresse URL du site suivie de caractères aléatoires (du type http://www.example.com/lsghlshdgkjsdgk).
* Vérifier à l'aide d'un outil de développement que le statut indiqué est bien `404 not found`.


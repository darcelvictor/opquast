
#Développement #Serveur_et_performances #Écoconception

Lorsque l’on saisit directement des termes de format domaine.com, certains navigateurs transforment en <https://www.domaine.com>, d’autres en <https://domaine.com> Il arrive fréquemment que cette dernière adresse renvoie une erreur, même sur de très gros sites. Pensez-y.


## Objectif

* Permettre aux utilisateurs de rejoindre la page d'accueil du site même lorsqu'ils oublient de taper le préfixe [www](http://www).
* Diminuer l'impact énergétique lié à la consultation du site

## Mise en œuvre

Configurer le serveur de façon à ce qu'il gère les adresses sans www (acheminement).

## Contrôle

Sur quelques unes des pages examinées :

* Enlever le préfixe «www» dans l'adresse de la page, au sein de la barre d'URL de votre navigateur
* Vérifier que vous avez toujours accès au site.

Attention : certains navigateurs masquent par défaut le préfixe [www](http://www). Le test devra donc se faire en ajoutant http\:// ou <https://devant> l'adresse tout en omettant le préfixe, par exemple : <https://opquast.com>.


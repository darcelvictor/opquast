
#Accessibilité #Développement #Internationalisation

Chaque requête auprès d’un serveur peut comporter des informations concernant les préférences de langue. Chaque internaute peut classer ses langues préférées dans son navigateur. Le serveur doit proposer les contenus en respectant l’ordre demandé par l’utilisateur. Si celui-ci indique le français, puis l’espagnol, puis l’anglais, le serveur devra servir la page en français si elle existe, sinon en espagnol si elle existe, et sinon en anglais si elle existe.


## Objectif

* Envoyer prioritairement à l’utilisateur la version de la page correspondant à la langue qu’il a indiqué dans les préférences de son outil de consultation.

## Mise en œuvre

Utiliser la négociation de contenu disponible selon le serveur, en testant les valeurs de l'en-tête HTTP accept-language.

## Contrôle

Pour un site disponible en plusieurs langues (français et anglais, par exemple) :

* Modifier les options de votre navigateur pour choisir votre langue favorite : sélectionner, par exemple, l'anglais en tant que langue préférée ;
* Taper l'URL principale du site dans ce même navigateur et vérifier que les contenus de la page sont disponibles dans la langue retenue comme favorite. Dans notre exemple, la version anglaise devrait être automatiquement renvoyée.
* Effectuer le même test en choisissant une autre langue favorite dans les options du navigateur.


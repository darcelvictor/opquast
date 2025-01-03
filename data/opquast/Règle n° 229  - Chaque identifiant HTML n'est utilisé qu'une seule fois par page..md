
Règle n° 229  - Chaque identifiant HTML n'est utilisé qu'une seule fois par page.

#Accessibilité #Développement #Structure_et_code

Un site web n’est pas prévu pour un navigateur particulier. Il va être affiché dans divers outils de consultation dont les comportements, en cas d’erreur dans le code, seront très variés. Éviter les erreurs de code, c’est donc prévenir les problèmes d’affichage. Alors, certes, la conformité absolue aux standards du W3C n’est pas toujours nécessaire. En revanche, la présence multiple d’un même identifiant dans une page peut avoir un impact bloquant au moins en termes d’accessibilité.

Objectif
--------

*   Éviter les erreurs de restitution du contenu ou d’interaction via les scripts.
*   Limiter les risques d’interprétation hasardeuse du Document Object Model (DOM) par des agents utilisateurs différents.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

La solution la plus radicale consiste à s’assurer de la validité complète du code source des pages, à l’aide d’un validateur tel que http://validator.w3.org. Cette solution conduit cependant à tenir compte de l’ensemble des erreurs de validation du code source qui n’entrent pas dans le champ de cette bonne pratique. Pour s’en tenir au seul champ de cette bonne pratique, on veillera à éviter toute valeur dupliquée d’un attribut `id` dans une même page HTML.

En savoir plus: [`id` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/id)

Contrôle
--------

Soumettre la page au validateur HTML du W3C (validator.w3.org) ou un autre outil de validation de code et vérifier que chaque valeur d’attribut `id` est unique dans la page.

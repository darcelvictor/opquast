
#Accessibilité #Conception #Développement #Formulaires

Évitons de transformer une saisie de date, de monnaie ou autre en jeu de devinette (avec ou sans tiret ? L’année ou le mois d’abord ? Avec ou sans les centimes ? Etc.). Et les champs de mots de passe, alors ? Faut-il un chiffre, une lettre en majuscule, une invocation magique ?


## Objectif

* Limiter le risque d'erreurs de saisie.
* Limiter les risques associés à l'envoi de données erronées ou impossibles à exploiter.
* Éviter que l'utilisateur ne renonce à poursuivre faute d'information sur la saisie attendue.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Indiquer quel est le format de saisie attendue via l'étiquette associée au champ. Par exemple : `<label for="mail">`Adresse email (du type mail@exemple.com)`</label>`

## Contrôle

Pour chaque formulaire :

* Soumettre différentes erreurs possibles dans chaque formulaire : non-respect d’un format demandé ou prévisible (format d’adresse e-mail, de date, etc.), afin de détecter les champs pour lesquels un format de saisie spécifique est imposé.
* Vérifier, à l’aide d’un inspecteur de code, que l’étiquette associée à chaque champ concerné en indique le format attendu dans l’élément label ou via un attribut ARIA.


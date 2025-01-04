
#Basics #Accessibilité #Conception #Développement #Formulaires #Privacy

Mieux vaut éviter à l’utilisateur de commettre une erreur parce qu’on ne lui a pas donné suffisamment d’informations dès le départ.


## Objectif

* Permettre aux utilisateurs de savoir à l'avance si un champ est obligatoire.
* Prévenir les erreurs avant qu'elles ne surviennent.
* Renforcer la confiance des utilisateurs sur l’utilisation de leurs données.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Indiquer le caractère obligatoire de la saisie dans l'étiquette associée au champ. Si l'indication est faite avec un symbole graphique (astérisque par exemple), faire précéder le formulaire d'une légende explicitant ce symbole.

## Contrôle

Pour chaque formulaire :

* Vérifier que l’étiquette associée à chaque champ en indique le caractère obligatoire, si besoin en contrôlant, avec un inspecteur de code, que l’information est bien présente dans l’élément `label`, dans un attribut `aria-label,` ou bien qu’elle est reliée au champ via un attribut `aria-labelledby` ou `aria-describedby`.
* Vérifier que les champs dont l’étiquette ne donne aucune information sur leur caractère obligatoire sont bien facultatifs, en validant le formulaire sans les remplir. Si un message d’erreur indique qu’ils doivent être remplis ou si le formulaire ne peut être validé ainsi, la bonne pratique est invalidée.


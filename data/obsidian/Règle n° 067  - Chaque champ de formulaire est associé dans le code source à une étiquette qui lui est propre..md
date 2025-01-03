
#Basics #Accessibilité #Développement #Formulaires

Ne pas savoir à quoi sert un champ de formulaire peut être extrêmement déroutant.

Objectif
--------

*   Faciliter la compréhension des données attendues dans les formulaires.
*   Permettre aux aides techniques d'accessibilité de restituer les champs de formulaires en les associant systématiquement à une étiquette indiquant leur rôle et la nature de la saisie attendue.
*   Faciliter la saisie en permettant de sélectionner le champ via un clic sur son étiquette aussi bien que sur le champ lui-même (particulièrement en cas de case à cocher ou de case radio).
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Donner à chaque champ de formulaire une étiquette qui lui soit explicitement associée :

*   si l'étiquette est visible, sous la forme d'un élément `label` doté d'un attribut `for` reprenant la valeur de l'attribut `id` affecté au champ, par exemple :

<label for="nom1">Nom de famille :</label>

<input id="nom1" type="text" name="nom">

*   si l'affichage de l'étiquette n'est pas souhaité (placeholder), sous la forme d'un attribut `aria-label` ou `aria-labelledby`.

Le recours à une étiquette <label for="…"> masquée via les styles CSS est déconseillé au profit de l'attribut `aria-label` ou `aria-labelledby`.

Contrôle
--------

Pour chaque champ de formulaire :

*   Vérifier, en regardant le code source ou à l'aide de Firebug, que l'attribut `for`, propre à l'élément `label`, ainsi que l'attribut `id` du champ ont exactement le même contenu. Si les valeurs de ces deux attributs sont effectivement identiques, l'étiquette (`label`) est bien associée au champ (`input`).
*   Dans le cas où aucune étiquette n'est visible dans le site (placeholder), vérifier que chaque champ de formulaire est doté d'un attribut `aria-label` ou `aria-labelledby`.

Dans les deux cas, vérifier enfin que l'étiquette décrit effectivement le rôle du champ ou la nature de l'information qui doit y être saisie. Cette bonne pratique ne peut donc être automatisée mais nécessite un examen manuel de chaque formulaire

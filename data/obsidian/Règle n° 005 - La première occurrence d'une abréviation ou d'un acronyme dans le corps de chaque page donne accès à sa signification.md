
#Accessibilité #Conception #Contenus #Développement #Editorial

SIG, TVA, AVT, VAT, DTC, XML… les abréviations, sigles et acronymes pullulent sur le Web, notamment dans les domaines techniques et administratifs. En les explicitant, vous rendez un fier service à vos utilisateurs et vous améliorez votre référencement.


## Objectif

* Permettre à l’utilisateur d’accéder rapidement à la signification d’un sigle.
* Permettre l’exploitation du contenu par un robot (pour l’établissement d’un index des sigles).
* Favoriser le référencement du contenu.
* Améliorer l’accessibilité des contenus aux personnes handicapées.

## Mise en œuvre

Au moins lors de la première apparition d’un sigle, acronyme ou abréviation dans la page, il s’agira de veiller à recourir à au moins l’une des méthodes ci-dessous :

* Expliciter sa signification au sein même du texte, par exemple : « une DTD (déclaration de type de document) ».
* Fournir un lien donnant accès à sa signification dans une page de glossaire ou via un affichage dynamique (bulle d’aide JavaScript).
* Baliser avec l’élément HTML `abbr` et renseigner l’attribut `title` de celui-ci pour indiquer sa signification.

La bonne pratique ne fait cette exigence que pour la première occurrence dans la page : cela peut être fait ou non pour les suivantes.

## Contrôle

Dans chaque page examinée, identifier visuellement chaque sigle, abréviation ou acronyme présent dans la page, puis vérifier, pour sa première occurrence dans la page, la présence, au moins :

* de sa signification immédiatement indiquée dans le contexte, par exemple entre parenthèses,
* d’un lien sur le sigle donnant accès à sa signification, par exemple dans un glossaire,
* ou de l’élément `abbr` doté d’un attribut `title` explicitant sa signification.


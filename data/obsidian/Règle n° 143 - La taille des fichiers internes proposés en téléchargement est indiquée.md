
#Basics #Accessibilité #Développement #Editorial #Liens #Écoconception

Cette mention de la taille des fichiers va permettre aux internautes de décider du meilleur moment pour télécharger un document. Par exemple, un internaute dans un contexte de mobilité ou disposant d’une connexion bas débit pourra choisir de reporter, voire de ne pas lancer, le téléchargement d’un fichier.


## Objectif

* Informer de façon préventive les utilisateurs sur la quantité de données à télécharger.
* Permettre aux utilisateurs de différer le téléchargement en connexion bas débit ou mobile.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Au minimum, prévoir une page d'aide indiquant le poids moyen ou maximum pour l'ensemble des fichiers proposés.

Au mieux, indiquer le poids lors de chaque lien permettant de télécharger un fichier.

En savoir plus: [élément `a` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)

## Contrôle

Pour chaque lien de téléchargement, vérifier qu'il est possible d'en connaître le poids :

* Via une information générique donnée dans une page d'aide ;
* Via une information donnée dans le contexte du lien : paragraphe ou élément de liste `li` où il est inclus, titre de section qui le précède, cellule d'en-tête de tableau associée à celle où il est présent ;
* Via l'attribut `title` du lien reprenant et complétant le libellé de celui-ci ;
* Ou via une information donnée dans le libellé du lien.


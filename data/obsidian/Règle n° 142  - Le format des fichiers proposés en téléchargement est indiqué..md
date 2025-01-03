
#Accessibilité #Développement #Liens #Écoconception

Pour un internaute, le fait de voir immédiatement le format d’un fichier proposé au télé- chargement (PDF, DOC, ODS, ODT, XLS, etc.) va lui permettre de savoir s’il peut ou non lire le fichier avec les logiciels dont il est équipé et le terminal de consultation utilisé.

Objectif
--------

*   Permettre aux utilisateurs de savoir en temps utile si leurs outils les autorisent à consulter les fichiers proposés en téléchargement.
*   Réduire la charge serveur en évitant les téléchargements inutiles.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Au minimum, prévoir une page d'aide indiquant le format des fichiers proposés s'il est unique.

Au mieux, indiquer le format pour chaque lien permettant de télécharger un fichier.

En savoir plus: [élément `a` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)

Contrôle
--------

Pour chaque lien de téléchargement, vérifier qu'il est possible d'en connaître le format via :

*   Une information générique donnée dans une page d'aide ;
*   Une information donnée dans le contexte du lien : paragraphe ou élément de liste `li` où il est inclus, titre de section qui le précède, cellule d'en-tête de tableau associée à celle où il est présent ;
*   L'attribut `title` du lien reprenant et complétant le libellé de celui-ci ;
*   Une information donnée dans le libellé du lien ;
*   Une icône dotée d'un texte alternatif indiquant le format du fichier.

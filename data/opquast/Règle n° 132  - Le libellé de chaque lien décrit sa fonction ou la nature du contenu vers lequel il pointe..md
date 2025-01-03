
Règle n° 132  - Le libellé de chaque lien décrit sa fonction ou la nature du contenu vers lequel il pointe.

#Basics #Accessibilité #Editorial #Liens #SEO

Pour s’en tenir à des contre-exemples fréquents de cette bonne pratique : les libellés de liens « Cliquer ici » et « Lire la suite » ne vous donnent aucune idée de l’endroit où vous allez vous rendre en cliquant dessus.

Objectif
--------

*   Permettre aux utilisateurs d'identifier précisément la nature du lien et d'éviter des actions erronées.
*   Permettre aux outils d'indexation d'associer un libellé à une ressource.
*   Permettre aux lecteurs d'écran d'en indiquer la cible de façon explicite et d'éviter de désorienter les utilisateurs.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Indiquer sans ambiguïté le contenu de la page cible du lien, la fonction du lien ou son comportement, le cas échéant, dans le libellé des liens (portion de texte située entre les balises <a href="URL"> et </a> ou dans l'alternative textuelle de l'image placée entre ces balises, éventuellement combinée au libellé textuel).

En savoir plus: [élément `a` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a) - [`img` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/img)

Contrôle
--------

Dans le code source de chaque lien texte ou image-lien

*   Vérifier que le libellé du lien désigne explicitement la nature ou la fonction du contenu visé, ou encore la fonction spécifique du lien ;
*   Contrôler, dans le cas d'images-liens, que l'attribut `alt` de l'image joue ce rôle.

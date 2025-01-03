
Règle n° 131  - Chaque lien est doté d'un intitulé dans le code source.

#Basics #Accessibilité #Développement #Liens

Un lien se compose au minimum d’une Url et d’un libellé. Si vous ne saisissez pas de libellé, vous avez un lien, certes, mais qui n'a pas de sens et qui risque de ne pas être perçu ou d’être incorrectement compris par les utilisateurs et les moteurs de recherche.

Objectif
--------

*   Éviter aux utilisateurs d'avoir uniquement une URL peu compréhensible en guise de libellé.
*   Éviter les liens qui deviennent invisibles lorsque les styles CSS ou les images d'arrière-plan ne sont pas pris en compte.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Donner à chaque lien un libellé textuel (entre les balises ouvrantes et fermantes de l'élément `a`) ou, si nécessaire, via l'alternative textuelle d'un élément `img` ou `object`, etc.

Ne pas masquer à l'affichage le libellé textuel de l'élément `a` pour le remplacer par un effet de style CSS (image d'arrière-plan).

En savoir plus: [élément `a` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)

Contrôle
--------

La détection des liens vides nécessite l'examen du code généré afin de contrôler le contenu effectivement présent dans la balise `a`, dans l'alternative de la balise `img` en cas d'image-lien ou encore dans l'alternative des éléments `object` et `embed`, etc.

Dans chaque page examinée :

*   Vérifier que chaque lien texte a un libellé affiché lorsque les styles CSS sont désactivés.
*   Contrôler que chaque lien image a un libellé affiché lorsque les images sont désactivées ;

Dans le cas des liens HTML, il faut également vérifier que le libellé est affiché lorsque les couleurs seules sont désactivées.

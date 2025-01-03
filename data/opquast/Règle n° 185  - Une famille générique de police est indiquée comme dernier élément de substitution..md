
Règle n° 185  - Une famille générique de police est indiquée comme dernier élément de substitution.

#Développement #Présentation

Sur votre système, tout va bien, l’affichage de vos polices est parfait. Mais que se passe- t-il pour les utilisateurs qui n’ont pas une de vos polices installées sur leur matériel ? C’est le moment d’appeler la police de substitution (serif, sans-serif ou autre, à vous de choisir).

Objectif
--------

*   Permettre aux contenus de s'afficher correctement, même lorsque les polices prévues ne sont pas présentes sur le système de l'utilisateur.

Mise en œuvre
-------------

Dans chaque feuille de style CSS, indiquer la famille générique de police appropriée dans les propriétés `font-family` ou `font` :

*   Pour les polices serif, ou à empattements (du type Times Roman), spécifier en dernier la famille de police générique serif. Dans l'exemple suivant, le terme « serif » a été correctement ajouté comme dernier élément de la liste des polices `font-family: Georgia, "Bookman Old Style", serif`.
*   Pour les polices sans serif, ou sans empattements (du type Arial), spécifier en dernier la famille de police générique sans-serif. Par exemple : `font-family: Optima, "Trebuchet MS", sans-serif`;
*   Pour les polices monospace (du type Courier), spécifier en dernier la famille de police générique monospace. Par exemple, `font-family: Courier, monospace` ;
*   De même, utiliser les familles génériques cursive et fantasy pour les polices manuscrites et fantaisies.

En savoir plus: [`font` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/font) - [`font-family` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/font-family)

Contrôle
--------

Dans toutes les feuilles de style CSS (pour tous les media : screen, print, etc.) :

*   Vérifier à l'aide d'un outil de développement d'un navigateur que chaque propriété `font` ou `font-family` contient l'un des termes relatifs aux familles génériques de police : `serif`, `sans-serif`, `monospace`, `cursive` ou `fantasy` ;
*   Contrôler que ces termes sont situés en fin de liste pour chaque propriété `font` ou `font-family` ;
*   S'assurer de la pertinence de la famille générique indiquée : `serif` pour les polices à empattements, `sans-serif` pour les polices sans empattements, `monospace`, `cursive` ou `fantasy` dans des cas particuliers.

La vérification peut également être effectuée en validant la page HTML à l'aide du validateur CSS du W3C ([http://jigsaw.w3.org/css-validator/](http://jigsaw.w3.org/css-validator/)) qui avertit alors en cas d'absence de familles de police générique.

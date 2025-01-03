
#Accessibilité #Conception #Développement #Présentation

La justification de texte, c’est souvent très joli, notamment sur support papier. Malheureusement, sur le Web, plusieurs études ont montré qu’elle rend la lecture plus difficile pour de nombreux publics tels que les dyslexiques. Pensez à eux, ne justifiez pas vos textes.

Objectif
--------

*   Faciliter la lecture à l’écran, notamment pour les personnes dyslexiques.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.

Mise en œuvre
-------------

Ne pas utiliser la propriété CSS text-align avec la valeur justify, ou tout autre équivalent.

En savoir plus: [`text-align` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/text-align)

Contrôle
--------

Vérifier dans le code CSS l’absence de règles text-align : justify.

Vérifier dans le code HTML l’absence d’attributs HTML align="justify".

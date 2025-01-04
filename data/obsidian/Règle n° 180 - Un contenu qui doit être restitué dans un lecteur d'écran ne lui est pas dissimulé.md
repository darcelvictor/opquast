
#Accessibilité #Développement #Présentation

Certaines propriétés CSS permettent de rendre certains contenus invisibles à l’écran. Le problème est que ces contenus risquent de disparaître aussi pour des utilisateurs qui ont besoin de les consulter. Sachez donc les masquer avec les bons outils.


## Objectif

* Faciliter l’adaptation du rendu au media (mobile ou autre) ou aux besoins de l’utilisateur (agrandissement de la taille des caractères, modification des couleurs, de la police, de la graisse, de la justification, etc.).
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Sauf si le contenu concerné est destiné à être rendu visible et perceptible sur action de l’utilisateur (onglets, menus déroulants, etc.) :

* Ne pas utiliser les propriétés display et visibility pour masquer le contenu.
* Ne pas utiliser l’attribut HTML hidden pour masquer le contenu.
* Ne pas donner au contenu un attribut ARIA aria-hidden="true".
* Ne pas utiliser le paramètre wmode d’un objet Flash avec les valeurs transparent ou opaque.

Utiliser :

* les propriétés CSS permettant de positionner le contenu en dehors de la zone d’affichage du navigateur (position, text- indent) ou de le rogner (clip) ;
* les propriétés ARIA permettant d’associer un libellé à un contenu (aria-label, aria-labelledby, aria-describedby) ;
* ou, dans le cas d’une étiquette de champ de formulaire, l’attribut title de celui-ci.

En savoir plus: [`display` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/display) - [`visibility` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/visibility)

## Contrôle

Dans le code généré et dans les feuilles de styles CSS des pages examinées :

* Détecter, à l’aide d’un inspecteur de code, des contenus qui seraient masqués à l’affichage (en dehors de ceux destinés à être rendus visibles sur action de l’utilisateur).
* Vérifier qu’aucun de ces contenus n’utilise les techniques indiquées dans la mise en œuvre s’ils sont destinés à être restitués dans un lecteur d’écran.



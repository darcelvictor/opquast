
Règle n° 136  - Le site n'applique pas le même style aux liens visités et non visités.

#Conception #Développement #Liens

Par défaut, les feuilles de styles des navigateurs prévoient des couleurs différentes pour les liens visités et non visités. Il est fort légitime de changer ce bleu et ce mauve fort peu seyants, mais pourquoi ne pas maintenir cette différence utile au visiteur ?

Objectif
--------

*   Faciliter l'identification des contenus déjà visités.
*   Faciliter l'identification des contenus restant à découvrir.
*   Inciter à la découverte de nouveaux contenus

Mise en œuvre
-------------

En dehors des menus de navigation, ne pas appliquer les mêmes styles CSS par défaut pour les liens non visités (sélecteurs `a` ou `a:link`) et pour les liens visités (sélecteur `a:visited`). Pour ce faire : soit prévoir un rendu spécifique pour les liens visités, soit ne pas indiquer de règle de rendu pour ceux-ci (le style par défaut du navigateur pourra alors s'appliquer sans difficulté).

En savoir plus: [`:visited` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/:visited) - [`:link` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/:link)

Contrôle
--------

Dans chaque page contenant des hyperliens :

*   Contrôler la présence et l'utilisation du sélecteur `:visited` dans les feuilles de style CSS et l'utilisation d'un style différent de celui appliqué à `a` ou `a:link` ou bien ;
*   Contrôler l'absence du sélecteur `:visited` dans les feuilles de style CSS pour laisser le style par défaut du navigateur s'appliquer

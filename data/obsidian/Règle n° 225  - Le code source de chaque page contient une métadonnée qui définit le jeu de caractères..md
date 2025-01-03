
#Accessibilité #Développement #SEO #Structure_et_code

Au hasard de votre navigation, vous avez certainement rencontré des bizarreries d’affichage sur certains caractères, des points d’interrogation dans des petits carrés, par exemple. C’est sans doute que les administrateurs des sites où vous les avez trouvées ne respectaient pas cette bonne pratique.

Objectif
--------

*   Permettre un affichage hors ligne correct des pages en indiquant au navigateur quel est le jeu de caractères utilisé.
*   Prévenir le risque de problèmes d’affichage de caractères lié à un fonctionnement parfois hasardeux des mécanismes de rattrapage des navigateurs quand ils ne disposent pas de l’information nécessaire via l’en-tête HTTP content-type.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

L’élément meta est renseigné en fonction de l’encodage effectif du document et de son type MIME sous la forme :

*   `meta charset="utf-8"` en HTML5

En savoir plus: [`meta` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta)

Contrôle
--------

Ce critère peut être vérifié par l’examen du code source, à l’aide d'un outil de développement. Pour chaque page :

*   Vérifier la présence de l’élément meta http-equiv="Content- Type" ou charset.
*   Vérifier la pertinence du jeu de caractères indiqué dans son attribut content ou charset.

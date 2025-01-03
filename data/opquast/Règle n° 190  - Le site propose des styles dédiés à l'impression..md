
Règle n° 190  - Le site propose des styles dédiés à l'impression.

#Basics #Accessibilité #Conception #Développement #Présentation #Écoconception

Il est parfaitement possible de prévoir la façon dont le contenu web d’une page doit s’imprimer sur papier. Les feuilles de styles pour le media print sont là pour ça.

Objectif
--------

*   Permettre l'impression des contenus sous une forme appropriée au support.

Mise en œuvre
-------------

Fournir une feuille de style spécifique pour le type de media print, par exemple sous la forme : <`link rel="stylesheet" type="text/css" href="print.css" media="print" />`.

Les styles d'impression peuvent corriger une feuille de style globale (feuille de style pour le media all ou sans mention du media) ou bien s'appliquer seuls pour le media print si la feuille de style d'affichage est appelée en précisant le media print.

En savoir plus: [`link` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/link) - [`style` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/style)

Contrôle
--------

Cette bonne pratique peut être évaluée rapidement en testant l'aperçu avant impression dans le navigateur, mais sa confirmation nécessite l'examen du code pour détecter la présence d'un style d'impression pour le media print, qui peut être :

*   Sous forme d'une balise du type <link rel="stylesheet" type="text/css" media="print" href="print.css" /> ;
*   Sous forme d'une balise du type <style media="print" type="text/css">…</style> ;
*   Sous forme d'une règle `@media print {…}` dans une CSS interne ou externe ;
*   Ou sous forme d'une règle `@import url("print.css")` `print;` dans une CSS interne ou externe.

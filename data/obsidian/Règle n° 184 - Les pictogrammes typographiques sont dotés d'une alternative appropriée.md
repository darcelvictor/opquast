
#Accessibilité #Développement #Présentation #SEO

Le recours aux web fonts (polices de caractères téléchargeables) a considérablement facilité le recours à une astuce technique très appréciée du point de vue des performances : remplacer les images de diverses icônes par un caractère UTF-8 graphique obtenu grâce à une police spécifique. Ceci comporte cependant des risques importants, notamment en matière d’accessibilité, si vous ne veillez pas à ménager une alternative textuelle à ce caractère détourné de son sens par défaut.


## Objectif

* Améliorer l’accessibilité des contenus aux personnes handicapées.
* Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation.

## Mise en œuvre

Fournir un contenu masqué à l’affichage via CSS pour chaque information portée par le recours à une police de caractères spécifique.

## Contrôle

Examiner directement le code pour vérifier que chaque icône affichée via une police de caractères est dotée d’une alternative dans le contenu HTML.


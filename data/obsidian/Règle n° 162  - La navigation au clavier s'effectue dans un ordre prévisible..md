
#Accessibilité #Développement #Navigation

De nombreux utilisateurs naviguent sans souris, avec les touches de leur clavier : facilitez-leur la vie.


## Objectif

* Faciliter la navigation au clavier.
* Permettre aux utilisateurs de clavier de se doter de repères de navigation.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Organiser les contenus dans l'ordre linéaire du code HTML de manière à regrouper et ordonner logiquement les liens et les contrôles de formulaires qui apparaissent les uns à la suite des autres à l'affichage et ordonner logiquement les principaux blocs de navigation et de contenu composant la page.

Le cas échéant, et en dernier ressort, recourir à l'attribut HTML `tabindex` pour créer un ordre de navigation au clavier spécifique, différent de l'ordre par défaut issu de l'organisation des liens et des contrôles de formulaires dans le code.

Gérer spécifiquement l'ordre de navigation au clavier en cas de fenêtre modale ou de widget.

## Contrôle

Ce contrôle s'effectue sur l'ensemble des éléments interactifs, prioritairement à l'aide de la touche tabulation et, dans l'interface de certains widgets, à l'aide de touches de déplacement spécifiques (touches flèches) :

* Naviguer au clavier puis vérifier que l'ordre de passage d'un élément à un autre est identique entre les différentes pages ;
* Vérifier que l'ordre de passage est adapté au contenu concerné. Par exemple, la navigation clavier dans une pseudo-popup javascript commence par son bouton de fermeture
* Contrôler que l'ordre est prévisible par l'utilisateur : sauf exceptions, cet ordre doit être aussi proche que possible de l'ordre de lecture, par exemple haut-bas et gauche-droite pour les écritures lisibles de gauche à droite.


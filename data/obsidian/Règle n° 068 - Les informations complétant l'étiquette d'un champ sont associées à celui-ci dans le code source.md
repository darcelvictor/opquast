
#Accessibilité #Développement #Formulaires

Les formulaires sont particulièrement importants pour les personnes handicapées, car ils sont souvent associés à des services à très haute valeur ajoutée : demande de service, achat en ligne, démarche administrative, etc. C’est la raison pour laquelle il est essentiel de veiller au fonctionnement de vos formulaires dans des lecteurs d’écran, utilisés par les non-voyants. Cette bonne pratique va contribuer au fait qu’ils deviennent utilisables dans ce contexte. Par la suite, son suivi lors des évolutions du site est essentiel.


## Objectif

* Optimiser le rendu dans les lecteurs d’écran en permettant d’expliciter les étiquettes des champs de formulaire.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Associer explicitement dans le code source chaque information venant compléter une étiquette de champ de formulaire, ou venant informer l’utilisateur en cas d’erreur de saisie :

* soit à l’aide d’un regroupement de champ fieldset et de l’élément legend ;
* soit à l’aide de l'attribut `aria-describedby `.

## Contrôle

Vérifier dans le code source que chaque information venant compléter une étiquette de champ de formulaire, ou venant informer l’utilisateur en cas d’erreur de saisie :

* est associée au champ en étant balisée par un élément legend inclus dans un élément fieldset regroupant les champs concernés ;
* ou est associée au champ via un attribut `aria-describedby`.


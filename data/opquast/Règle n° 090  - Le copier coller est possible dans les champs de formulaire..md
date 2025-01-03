
Règle n° 090  - Le copier coller est possible dans les champs de formulaire.

#Basics #Accessibilité #Développement #Formulaires

Saisissez votre adresse e-mail. C’est bon, c’est fait ? Et si maintenant je vous demande de la saisir de nouveau, vous allez peut-être avoir la flemme de le faire et voudrez la copier depuis le premier champ pour la coller dans le deuxième. De quel droit certains sites voudraient vous empêcher de faire cela ? Vive le copier-coller libre !

Objectif
--------

*   Faciliter la saisie dans les formulaires.

Mise en œuvre
-------------

*   Ne pas intercepter les événements JavaScript `onpaste` ou `keydown` pour bloquer le coller dans un champ de formulaire.
*   Ne pas intercepter les événements JavaScript `oncopy` ou `oncut` pour bloquer le copier dans un champ de formulaire.

Contrôle
--------

Vérifier qu’il est possible de copier le contenu de chaque champ y compris les champs de type `password` (en utilisant le menu contextuel du navigateur ou à défaut un mécanisme propre au formulaire).

Vérifier qu’il est possible de coller un contenu dans chaque champ y compris dans les champs de type `password` (en utilisant le menu contextuel du navigateur ou à défaut un mécanisme propre au formulaire).

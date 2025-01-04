
#Accessibilité #Développement #Editorial #Structure_et_code

Certains internautes vocalisent les contenus web grâce à des aides techniques. Un tableau très clair à l’écran peut devenir totalement incompréhensible en mode vocal. Il est pourtant assez facile de prévoir ce cas de figure.


## Objectif

* Permettre aux aides techniques de restituer l'information contenue dans les tableaux de données de manière compréhensible, en indiquant à l'utilisateur les relations logiques entre contenu et en-têtes du tableau.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Utiliser l'élément HTML `th` et son attribut `scope` pour baliser les cellules d'en-têtes et expliciter leur portée (`scope` de valeur `col` pour un en-tête de colonne, de valeur `row` pour un en-tête de ligne).

Pour les en-têtes qui ne s'appliquent qu'à une partie d'une ligne ou d'une colonne, contrôler la présence systématique de l'attribut `id` pour l'élément `th` et de l'attribut `headers` pour les éléments `td` avec les valeurs appropriées :

* Donner à chaque en-tête (élément `th`) un attribut `id` (par exemple, `id="foo"`) ;
* Utiliser l'attribut `headers` dans chaque cellule (élément `td`) pour indiquer les en-têtes associées (par exemple, `headers="foo"` pour chaque cellule rattachée à l'en-tête ayant l'attribut `id="foo"`).

En savoir plus: [`th` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/th) - [`td` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/td)

## Contrôle

Dans le code généré des tableaux de données :

* Vérifier l'utilisation systématique de l'élément `th` pour baliser les en-têtes de ligne ou de colonne ;
* Pour les en-têtes s'appliquant à la totalité d'une ligne ou d'une colonne, contrôler la présence systématique de l'attribut `scope` doté de la valeur appropriée (`row` pour une ligne ou `col` pour une colonne) ;
* Pour les en-têtes qui ne s'appliquent qu'à une partie d'une ligne ou d'une colonne, contrôler la présence systématique de l'attribut `id` pour l'élément `th` et de l'attribut `headers` pour les éléments `td` avec les valeurs appropriées :
* Chaque en-tête (élément `th`) doit être dotée d'un attribut `id` (par exemple, `id="foo"`) ;
* L'attribut headers doit être utilisée dans chaque cellule (élément `td`) pour indiquer les en-têtes associées (par exemple, `headers="foo" `pour chaque cellule rattachée à l'en-tête ayant l'attribut `id="foo"`).


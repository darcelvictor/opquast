
Règle n° 240  - Les tableaux de données ne sont pas simulés à l'aide de texte mis en forme.

#Accessibilité #Développement #SEO #Structure_et_code

Pour mettre en place un tableau dans une page web, il existe des balises spécifiques. Il est également possible de simuler visuellement des tableaux en insérant des espaces entre des données. Cette dernière solution est à éviter absolument.

Objectif
--------

*   Permettre aux utilisateurs d'accéder à des tableaux exploitables par leur agent utilisateur et restitués de manière compréhensible dans tous les cas.
*   Améliorer l’accessibilité des contenus aux personnes handicapées. Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Utiliser systématiquement l'élément `table` et les éléments associés `tr, td, th, caption`, pour baliser les tableaux de données, et non des artifices reposant sur des accumulations d'espaces insécables ou de caractères graphiques tels que les pipes (lignes verticales « | »).

En savoir plus: [`table` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/table)

Contrôle
--------

Pour chaque contenu affiché sous forme de tableau de données (c'est-à-dire associant des cellules de données à des en-têtes de ligne ou de colonnes) :

*   S'assurer que celui-ci est balisé avec les éléments HTML `tr` (ligne), `td` (cellule de données), `th` (en-tête de ligne ou de colonne) et `caption` (titre du tableau), par exemple à l'aide d'un outil de développement.

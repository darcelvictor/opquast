
Règle n° 239  - Les tableaux de données ne sont pas remplacés par des images.

#Accessibilité #Développement #Editorial #SEO #Structure_et_code #Écoconception

Il peut être tentant, pour aller plus vite, de scanner un tableau présent dans un document bureautique et de coller l’image dans la page web, Mais c’est en fait une très mauvaise idée : le contenu de ce tableau ne sera ni indexable par les moteurs de recherche, ni consultable pour différents utilisateurs.

Objectif
--------

*   Permettre aux utilisateurs d’accéder à des tableaux exploitables par leur agent utilisateur et restitués de manière compréhensible dans tous les cas.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Utiliser systématiquement l’élément `table` et les éléments associés `tr, td, th, caption` pour baliser les tableaux de données, et non des images reproduisant le tableau.

En savoir plus: [`table` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/table)

Contrôle
--------

S’assurer qu’aucun tableau de données n’est géré sous forme d’image.

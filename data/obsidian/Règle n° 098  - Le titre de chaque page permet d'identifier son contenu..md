
#Basics #Accessibilité #Editorial #Identification_et_contact #SEO

Identifier le site en regardant le titre d’une page, c’est bien, mais comprendre très vite la nature du contenu d’une page, c’est encore mieux. Et ce ne sont pas les moteurs de recherche qui diront le contraire.

Objectif
--------

*   Permettre aux utilisateurs d'identifier immédiatement la nature des contenus de chaque page dans les onglets, les favoris, dans la fenêtre du navigateur ou encore dans les lecteurs d'écran.
*   Améliorer le référencement des pages et leur présentation dans les moteurs de recherche.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Rédiger le contenu de l'élément `title` de chaque page de manière à ce qu'il décrive, de la façon la plus concise possible, le contenu ou la fonction de la page , y compris à la suite d'une requête Ajax modifiant de manière essentielle le contenu de la page.

Préciser quelle est l'étape en cours d'un processus dans l'élément title des pages. Par exemple, inscrire « Étape 3 de votre inscription » dans l'élément `title` de la page correspondant à la troisième étape d'un formulaire d'inscription.

Préciser, dans le cas de l'affichage d'une série de résultats de recherche, quel est l'intervalle de résultats affiché dans la page courante. Par exemple, « Résultats 10 à 19 de la recherche sur “Foo” ».

Préciser l'état dans le titre d'une page de demande de confirmation ou d'annulation lors de la soumission d'un formulaire (exemple : « Demande de confirmation de suppression - Mes documents »).

Contrôle
--------

Dans toutes les pages du site, y compris dans les pages d'un processus ou d'une série de résultats de recherche, ou encore dans les pages dont le contenu peut être modifié de manière majeure via Ajax :

*   Vérifier que chaque titre de page (élément `title`) permet d'identifier le contenu ou la fonction de la page.

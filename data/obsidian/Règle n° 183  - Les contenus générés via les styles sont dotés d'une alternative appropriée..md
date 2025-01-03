
#Accessibilité #Développement #Présentation #SEO

Certaines instructions CSS permettent d’afficher des textes et des images qui sont de fait invisibles pour les utilisateurs et les outils qui ne prennent pas en charge les feuilles de styles. Par exemple, en cas de désactivation des couleurs ou des styles CSS, une image CSS (propriété background-image) ne sera pas visible alors qu’une image HTML (élément ) l’aurait été.

Objectif
--------

*   Permettre aux utilisateurs placés dans des contextes où les styles ne sont pas restitués (navigateur texte, lecteur d'écran, navigateur avec styles désactivés) d’accéder à l’information présente sous forme de contenus générés en CSS (images d’arrière-plan notamment).
*   Permettre aux robots d'exploiter l'information véhiculée par les styles CSS (référencement, indexation, traduction automatique des alternatives).
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Fournir un contenu masqué à l’affichage via CSS :

*   pour chaque information portée par les propriétés CSS background-image ou content ;
*   pour chaque information affichée via un pseudo-élément CSS :before ou :after ;
*   et plus généralement, pour chaque information absente par ailleurs de la page et dont la restitution dépend du support des styles.

En savoir plus: [`background-image` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/background-image) - [`content` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/content) - [`before` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/::before) - [`after` sur MDN](https://developer.mozilla.org/fr/docs/Web/CSS/::after)

Contrôle
--------

Examiner directement le code CSS et comparer visuellement l’affichage normal de la page avec son rendu après désactivation des images d’arrière-plan. Pour chaque page :

*   Afficher les feuilles de styles grâce à une barre d’outils dédiée et vérifier que les propriétés et éléments cités dans le paragraphe « Solution technique » sont absents des CSS ou ne sont pas utilisés pour produire une information par ailleurs absente du code HTML.
*   Désactiver les images d’arrière-plan CSS avec une barre d’outils dédiée.
*   Contrôler l’absence de perte d’information, en comparant l’affichage avec et sans images d’arrière-plan.

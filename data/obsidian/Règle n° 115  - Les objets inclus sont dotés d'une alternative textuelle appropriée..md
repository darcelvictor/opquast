
#Accessibilité #Développement #Editorial #Images_et_médias #SEO

Une vidéo, un objet Flash (oui il y en a encore), un contenu audio peuvent être impossibles à consulter dans certains contextes. Une alternative permet d’accéder à leur contenu.

Objectif
--------

*   Fournir un accès à l'information pour les utilisateurs dont le navigateur ou la plateforme ne supporte pas l'inclusion d'objets ou les technologies utilisées dans les objets inclus.
*   Faciliter l'exploitation de ces contenus par les robots (référencement en particulier).
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Indiquer l'alternative des objets inclus via l'une des solutions suivantes :

*   Le contenu de l'élément HTML `object` ;
*   Le contenu de l'élément HTML `noembed` ;
*   Un contenu présent immédiatement avant ou après l'objet ;
*   Un lien vers une page fournissant le contenu alternatif, placé immédiatement avant ou après l'objet.

Contrôle
--------

Cette vérification nécessite la détection des éléments `object` et `embed`, en tenant compte de leur éventuelle génération via Javascript. Pour chaque page contenant un de ces éléments :

*   Désactiver le support des technologies tierces dans le navigateur.
*   S'assurer que l'information alternative est présente et affichée, ou qu'elle est accessible grâce à un lien présent dans le contexte immédiat de chaque objet.

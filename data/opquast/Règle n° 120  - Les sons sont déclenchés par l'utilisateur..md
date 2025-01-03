
Règle n° 120  - Les sons sont déclenchés par l'utilisateur.

#Basics #Accessibilité #Développement #Images_et_médias #Écoconception

Il est 23 heures, les enfants dorment, vous naviguez sur Internet et, brutalement, un site déclenche un son tonitruant. Vous sursautez, puis vous cherchez fébrilement comment couper le son car, oui, vous aviez oublié d’éteindre vos enceintes. C’est du vécu, n’est-ce-pas ? Alors ne déclenchez pas de son automatiquement dans votre site. S’il vous plaît.

Objectif
--------

*   Laisser à l'utilisateur le contrôle du son lors de la consultation du site.
*   Ne pas surprendre l'utilisateur par la diffusion inattendue d'un contenu audio.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Ne pas mettre en place des contenus audio dont le démarrage est automatique et sans action explicite de l'utilisateur en ce sens.

Ne pas incorporer dans la page d'éléments déclenchant la lecture d'un son non contrôlable par exemple avec l'élément html `audio` doté de l'attribut `autoplay` ou sans l'attribut `controls`.

Contrôle
--------

Dans chaque page comportant un contenu audio :

*   Vérifier l'absence de contenus audio activés automatiquement au chargement de la page ;
*   Vérifier l'absence de contenus audio activés de manière imprévisibles suite à une action de l'utilisateur.


#Basics #Accessibilité #Développement #Images_et_médias #Écoconception

Le déclenchement automatique des vidéos est à double tranchant. D’un côté vous « poussez » le contenu vidéo vers vos utilisateurs, vous rendez votre site plus dynamique (jeune, frais, sexy etc.). De l’autre, vous envoyez des données en quantité importante sans l’accord explicite des utilisateurs, vous prenez le risque d’augmenter le taux de rebond, de nuire à votre référencement. Si vous déclenchez vos vidéos automatiquement (en autoplay), comme le font certains réseaux sociaux, vous prenez le risque de voir certains utilisateurs accéder à des contenus dangereux ou inappropriés pour certains publics, surtout si vous diffusez de la vidéo en direct. Bref, avant de déclencher automatiquement vos vidéos, réfléchissez bien.

Objectif
--------

*   Laisser à l’utilisateur le contrôle de l’interface visuelle lors de la consultation du site.
*   Ne pas imposer à l’utilisateur le déclenchement d’un contenu animé.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Ne pas mettre en place des contenus vidéo dont le démarrage est automatique et sans action explicite de l'utilisateur en ce sens.

Ne pas incorporer dans la page d'éléments déclenchant la lecture d'une vidéo non contrôlable par exemple avec l'élément html `vidéo` doté de l'attribut `autoplay` ou sans l'attribut `controls`.

Contrôle
--------

Dans chaque page comportant un contenu vidéo :

*   Vérifier l'absence de contenus vidéo activés automatiquement au chargement de la page ;
*   Vérifier l'absence de contenus vidéos activés de manière imprévisibles suite à une action de l'utilisateur.

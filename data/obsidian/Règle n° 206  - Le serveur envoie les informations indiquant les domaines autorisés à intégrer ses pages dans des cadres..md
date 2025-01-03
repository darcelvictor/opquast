
#Développement #Sécurité

Les cadres permettent d’afficher des morceaux de pages web à l’intérieur d’une page web. C’est par exemple le cas d’un cadre affichant une publicité dans une autre page web. Votre site peut également être embarqué depuis une autre page, par exemple pour le tester avec certains services. Cela peut aussi être fait avec de mauvaises intentions, notamment pour faire croire à un utilisateur peu prudent qu’il est bien sur votre site : il faut donc empêcher ce risque.

Objectif
--------

*   Réduire les risques d’utilisation trompeuse du contenu.

Mise en œuvre
-------------

Configurer le serveur pour l’envoi de l’en-tête HTTP X-Frame-Options avec la valeur deny (pour interdire toute inclusion de la page dans un cadre, quel qu’en soit le site) ou sameorigin (pour limiter les inclusions à des cadres du même nom de domaine que la page). La valeur allow-from (pour limiter les inclusions à des URL spécifiques) ne bénéficie pas, en revanche, à l’heure où nous écrivons ces lignes, d’un support suffisant.

Contrôle
--------

Vérifier à l’aide d’un outil d’inspection des en-têtes HTTP la présence de X-Frame-Options avec la valeur deny ou sameorigin.

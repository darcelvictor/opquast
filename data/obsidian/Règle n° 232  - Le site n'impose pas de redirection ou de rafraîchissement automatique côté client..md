
#Basics #Accessibilité #Développement #Structure_et_code

Les redirections côté client affichent brièvement une première page puis envoient automatiquement l’utilisateur vers une autre page. Le rafraîchissement automatique recharge automatiquement la page courante sans que l’utilisateur en fasse la demande.

Objectif
--------

*   Laisser à l’utilisateur le contrôle de son navigateur et de son interface de consultation
*   Éviter des coupures ou des pertes d’information en cours de lecture, notamment pour les utilisateurs équipés de lecteurs d’écran qu’un rafraîchissement ou une redirection temporisée interromprait lors de la consultation.
*   Ne pas pénaliser la consultation du contenu en mobilité lorsque la qualité du réseau est variable sur une courte échelle de temps.
*   Permettre à l’utilisateur d’éviter un surcroît non désiré de coût d’utilisation des données mobiles.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.

Mise en œuvre
-------------

Ne pas utiliser l’élément `meta http-equiv="refresh"`.

Fournir à l’utilisateur un moyen de désactiver les éventuels rafraîchissements automatiques et les redirections créées :

*   en JavaScript ;
*   via un élément `object, embed ou applet` ;
*   ou via un `en-tête HTTP refresh`.

En savoir plus: [`meta` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta)

Contrôle
--------

Pour chaque page examinée :

*   Vérifier, à l’aide d’un inspecteur de code, l’absence de l’élément `meta http-equiv="refresh"`.
*   Vérifier que la consultation de la page ne révèle aucun rafraîchissement automatique ni aucune redirection côté client qui ne soient désactivables auparavant via l’interface du site (sans devoir faire appel à une éventuelle fonctionnalité propre au navigateur).

La détection de l’élément `meta http-equiv="refresh"` est aisée en observant le code source de la page. En revanche, la diversité des dispositifs JavaScript de rafraîchissement automatique impose de procéder également à un contrôle via la consultation de la page dans le navigateur. Ce contrôle peut être facilité si le navigateur offre une option interdisant certains de ces rafraîchissements et affiche alors un bandeau d’alerte. Mais seule l’observation de la page permet une détection à coup sûr.

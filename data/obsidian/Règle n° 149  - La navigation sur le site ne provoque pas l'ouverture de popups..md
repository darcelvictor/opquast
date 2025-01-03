
#Accessibilité #Conception #Navigation #Écoconception

Vous les avez certainement reconnues, il s’agit de l’une des pestes du Web : les popups. Elles ont presque disparu et peu de gens les regrettent. Certes, elles ont été remplacées par les popins (interstitiels), qui viennent vous perturber dans les pages et non dans une nouvelle page… Mais occupons-nous d’une seule chose à la fois.

Objectif
--------

*   Permettre à l'utilisateur de naviguer sur le site sans avoir d'opération spécifique à effectuer pendant la navigation.
*   Éviter à des utilisateurs d'aides techniques d'être désorientés par l'ouverture d'une nouvelle fenêtre qui ne sera pas toujours aisément perceptible et qui perturbe notamment l'utilisation de l'historique de navigation ou qui masquera dans un lecteur d'écran la fenêtre principale.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.

Mise en œuvre
-------------

Ne pas utiliser d'ouverture automatique de fenêtres popup (événement d'ouverture de fenêtre lors du chargement d'une page) sur les pages internes du site.

Contrôle
--------

Cette bonne pratique est à vérifier manuellement à l'occasion de l'ensemble des autres tests, en prenant soin de désactiver toute éventuelle fonctionnalité de blocage des popups dans le navigateur utilisé.

Dans toutes les pages internes du site :

*   Vérifier que la navigation dans les pages internes du site ne déclenche pas l'ouverture automatique de nouvelles fenêtres.

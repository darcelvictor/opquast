
#Données_personnelles #Développement #Privacy

L’ouverture de liens dans des nouvelles fenêtres est possible à la condition de prendre quelques précautions. Il faut notamment signaler l’ouverture de la nouvelle fenêtre, mais c’est l’objet d’une autre bonne pratique. Mais ce n’est pas tout, vous devez également veiller à ce que les informations de contexte ne circulent pas entre les sites d’origine et de destination. Cette précaution peut éviter des problèmes de sécurité et de performance.


## Objectif

* Prévenir la transmission de données personnelles.
* Prévenir l’exécution de code malicieux.
* Prévenir les baisses de performance liées au partage de ressources dans de multiples fenêtres.
* Renforcer la confiance des utilisateurs sur l’utilisation de leurs données

## Mise en œuvre

Doter chaque lien ayant un attribut `target="_blank"` d'un attribut `rel="noreferrer noopener"`.

## Contrôle

vérifier pour chaque lien ayant un attribut `target="_blank"` la présence de l'attribut `rel="noreferrer noopener"`.


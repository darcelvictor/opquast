
#Développement #Sécurité

Ne cherchez pas, le mime n’a rien à voir avec Marcel Marceau, c’est simplement un identifiant permettant d’indiquer le format des données sur Internet. La détection automatique de ce format peut rendre possible l’envoi de contenus dangereux vers le poste des utilisateurs. Dans la mesure où cette détection automatique n’est pas vitale, désactivez-la.


## Objectif

* Réduire les risques de téléchargement d’un contenu dangereux dissimulé.

## Mise en œuvre

Configurer le serveur pour adresser l’en-tête X-Content-Type-Options avec la valeur nosniff.

## Contrôle

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de l’en-tête X-Content-Type-Options avec la valeur nosniff.


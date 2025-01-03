
Règle n° 205  - Le serveur envoie les informations d'activation de protection cross site scripting.

#Développement #Sécurité

Le cross-site scripting est une attaque qui consiste à injecter et exécuter un contenu –malveillant – sur une page. Certains navigateurs ont des mécanismes intégrés de filtres pour protéger contre certains types de ces attaques, mécanismes qui peuvent malheureusement être désactivés. Pour empêcher que votre site puisse faire courir ce genre de risques aux utilisateurs, il est donc conseillé de forcer la présence de l’en-tête de protection et de jouer la sécurité maximale pour le visiteur en bloquant la totalité du contenu de la page.

Objectif
--------

*   Réduire les risques de téléchargement d’un contenu dangereux dissimulé.

Mise en œuvre
-------------

Configurer le serveur pour l’envoi de l’en-tête HTTP X-XSS-Protection avec la valeur 1; mode=block.

Contrôle
--------

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de X-XSS-Protection avec la valeur 1; mode=block.

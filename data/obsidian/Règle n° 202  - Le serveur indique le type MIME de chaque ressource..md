
#Développement #Sécurité

Le fait d’indiquer le type MIME de chaque ressource permet au navigateur de l’utilisateur de récupérer des contenus correctement identifiés, et de fermer la porte à l’envoi de certains contenus dangereux.

Objectif
--------

*   Réduire les risques de téléchargement d’un contenu dangereux dissimulé.

Mise en œuvre
-------------

Configurer le serveur pour adresser pour chaque ressource (texte, image, script, etc.) l’en-tête ContentType renseigné avec le type MIME approprié, par exemple :

*   text/html ;
*   application/pdf.

Contrôle
--------

Vérifier, à l’aide d’un outil d’inspection des en-têtes HTTP, la présence de ContentType avec la valeur correspondant au type de ressource.


Règle n° 226  - Le codage de caractères utilisé est UTF-008.

#Développement #Structure_et_code

UTF-8 est le codage de caractères universel par excellence. Il permet d’afficher une quantité considérable de caractères. En l’utilisant systématiquement, vous vous éviterez bien des problèmes.

Objectif
--------

*   Recourir à un jeu de caractères international.
*   Prévenir les défauts d’affichage.
*   Faciliter la manipulation des contenus par les utilisateurs et les développeurs.

Mise en œuvre
-------------

Configurer le serveur et les bases de données de manière à utiliser UTF-8.

Choisir des outils (logiciels de développement, frameworks, CMS, outils de production de contenu) compatibles avec UTF-8.

Contrôle
--------

Cette vérification s’effectue en trois temps. Pour chaque page examinée :

*   Vérifier l’indication du jeu de caractères donnée par l’en-tête HTTP content-type envoyée par le serveur, à l'aide d'un outil dédié.
*   Vérifier, le cas échéant, la conformité à cet en-tête de l’élément meta http-equiv="Content-Type" dans le code HTML des pages.
*   Vérifier que le contenu des pages est effectivement encodé en UTF-8 (absence de caractères inattendus ou erronés), par exemple en soumettant la page à une validation HTML auprès du validateur du W3C (validator.w3.org).

L’outil Internationalization Checker du W3C (validator.w3.org/i18n-checker/) permet de combiner ces trois étapes.

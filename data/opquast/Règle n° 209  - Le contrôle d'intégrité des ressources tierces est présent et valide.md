
Règle n° 209  - Le contrôle d'intégrité des ressources tierces est présent et valide

#Développement #Sécurité

Il est possible de vérifier que les ressources tierces (fichiers scripts, feuilles de style…) n’ont pas été modifiées pour y insérer du code malveillant. Pour ceci, le client web (navigateur, notamment) va vérifier en permanence que les fichiers envoyés sont les bons fichiers. Cette bonne pratique incite à la mise en place de cette mesure de sécurité.

Objectif
--------

*   Prévenir les risques de diffusion de code malveillant.
*   Limiter les risques associés à la diffusion de code malveillant désindexation, plaintes…

Mise en œuvre
-------------

Utiliser l'attribut integrity de chaque élément `link` et `script` (appelant un fichier externe) pour fournir au navigateur le hachage cryptographique (hachage SRI) auquel le fichier doit correspondre.

En savoir plus: [`link` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/link) - [`script` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/script)

Contrôle
--------

Vérifier pour chaque élément `link` et `script` (appelant un fichier externe) la présence de l'attribut `integrity` indiquant le hachage cryptographique (hachage SRI) auquel le fichier concerné doit correspondre.

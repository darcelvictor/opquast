
Règle n° 111  - Chaque image décorative est dotée d'une alternative textuelle appropriée.

#Accessibilité #Développement #Editorial #Images_et_médias #SEO

Savez-vous qu’il est possible d’écouter une page ? C’est ce que font toutes les personnes équipées d’un logiciel lecteur d’écran, ce qui est souvent le cas des personnes malvoyantes et non-voyantes. Ce logiciel leur lit les pages web. Si vous avez indiqué une alternative textuelle pour chaque image décorative, celle-ci sera systématiquement lue. Mais au bout de la vingtième fois que le lecteur d’écran aura prononcé les mots « Puce bleue », l’utilisateur sera peut-être énervé. Dans la plupart des cas, l'alternative textuelle appropriée pour une image décorative sera un attribut ou un contenu vide.

Objectif
--------

*   Éviter aux utilisateurs placés dans des contextes où les images ne sont pas perceptibles (navigateur texte, lecteur d’écran, navigateur avec images désactivées) d’être perturbés par des informations sur des images qui leur sont inutiles.
*   Fournir aux robots d’indexation uniquement des informations pertinentes.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

D’une manière générale, si un code (un attribut HTML, par exemple) est prévu pour l’alternative, il doit être présent, mais en restant vide. Pour les cas les plus courants :

*   Donner à chaque élément img décoratif un attribut alt vide (alt="").
*   Donner à chaque élément area décoratif un attribut alt vide.
*   Laisser vide le contenu de chaque élément object concerné (entre les balises <object> et </object>).
*   Laisser vide le contenu de chaque élément canvas concerné.
*   Ne donner à chaque élément svg concerné aucun attribut ARIA qui lui confère un label (aria-labelledby, aria-describedby, etc.).

Contrôle
--------

Cette vérification s’effectue dans le code HTML généré à l’aide d’un inspecteur de code ou d’une barre d’outils dédiée :

*   Tester au préalable la présence des attributs alt en vérifiant la validité du code HTML généré, par exemple avec le validateur du W3C (le validateur HTML signale les images privées d’alternative) : chaque image décorative doit avoir un attribut alt (présent mais vide).
*   Vérifier que chaque image img ne véhiculant pas d’information nécessaire à la compréhension du contenu a bien un alt vide.
*   Vérifier les éventuels autres objets graphiques du type object, canvas dont le contenu (entre les balises ouvrantes et fermantes) doit être vide.
*   Vérifier les éventuels autres éléments du type svg susceptibles de recevoir une alternative via un attribut ARIA.


#Accessibilité #Développement #Internationalisation #SEO

Une page web est rédigée dans une langue qui n’est pas forcément identifiable par les outils qui analysent les pages. Cette information doit être fournie à tous les outils automatiques dans le code source de celles-ci.

Objectif
--------

*   Favoriser l’indexation des contenus selon leur langue.
*   Faciliter la traduction automatique.
*   Permettre une lecture correcte du contenu par un outil de synthèse vocale.
*   Améliorer l’accessibilité des contenus aux personnes handicapées.
*   Améliorer la prise en compte des contenus par les moteurs de recherche et outils d’indexation

Mise en œuvre
-------------

Renseigner l'attribut `lang` de l'élément racine `html` à l'aide du code langue approprié (tel qu'indiqué par le registre tenu par l'IANA : [http://www.iana.org/assignments/language-subtag-registry](http://www.iana.org/assignments/language-subtag-registry)). En pratique, pour le français, cela donne : <html lang="fr"> (en HTML) et <html lang="fr" xml:lang="fr"> (en XHTML).

À défaut, dans des cas plus complexes, la langue du contenu peut être indiquée via les différents éléments parents : `head`, `body`, `title`, etc.

En savoir plus: [`lang` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/lang)

Contrôle
--------

La vérification consiste à contrôler la présence et la pertinence de l'attribut lang de l'élément `html` (ou à défaut de ses éléments descendants) dans le code source de chaque page :

*   Vérifier que la langue par défaut du contenu est indiquée via l'attribut `lang` de l'élément `html`, par exemple <html lang="fr"> (en HTML)
*   À défaut, vérifier qu'elle est au moins héritée, pour chaque élément de contenu, d'un élément parent (`head`, `body`, `title`, etc.) via son attribut `lang`.

Vérifier la validité et la pertinence du code de langue utilisé. Pour cela, recourir par exemple au Language Subtag Lookup Tool de Richard Ishida, [https://r12a.github.io/app-subtags/](https://r12a.github.io/app-subtags/).

Parmi les cas courants de codes de langue erronés, citons `jp` au lieu de `ja` pour le japonais, `lu` au lieu de `lb` pour le luxembourgeois, `gr` au lieu de `el` pour le grec, `lat` au lieu de `la` pour le latin et `oci` au lieu de `oc` pour l'occitan. Par ailleurs, les codes `mul` pour « langues multiples » et `und` pour « langue indéterminée » ne doivent pas être utilisés dans un contenu web. Enfin, l'attribut `xml:lang` peut être également renseigné en complément de l'attribut `lang`, mais il n'est pas suffisant pour rendre conforme cette bonne pratique.

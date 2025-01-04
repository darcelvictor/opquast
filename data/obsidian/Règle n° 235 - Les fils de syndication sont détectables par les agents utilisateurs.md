
#Développement #Structure_et_code

Vos flux RSS seront d’autant plus consultés que les internautes y auront accès par leur moyen le plus habituel offert par leur navigateur ou leur agrégateur.


## Objectif

* Permettre au navigateur d'indiquer dans son interface la présence d'un fil de syndication associé à la page en cours de consultation.

## Mise en œuvre

Indiquer les fils RSS dans la section `head` de la page, à l'aide d'un élément `link` du type :

\<link title="La bonne pratique du jour" href="https://checklists.opquast.com/dailybp/feed" type="application/rss+xml" rel="alternate">.

## Contrôle

Dans le code source des pages du site :

* Identifier les différents fils de syndication ;
* Contrôler, par exemple à l'aide de Firebug, la présence de l'élément `link` approprié (`type="application/rss+xml"`) dans l'en-tête de la page HTML ;
* Vérifier que l'adresse URL présente dans l'élément `link` affiche bien un contenu RSS.


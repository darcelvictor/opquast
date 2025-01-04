
#Accessibilité #Développement #Editorial #Internationalisation

Les outils automatiques et les robots qui parcourent vos contenus ne peuvent pas forcément en deviner la langue principale ni ses éventuelles variations. La présence d’un terme en langue étrangère dans une page peut et doit être signalé.


## Objectif

* Permettre aux aides techniques d’interpréter correctement les contenus exprimés dans une autre langue.
* Faciliter le travail des outils de traduction automatique.
* Améliorer l’accessibilité des contenus aux personnes handicapées

## Mise en œuvre

Utiliser l'attribut `lang` et le code de langue adapté pour chaque contenu dont la langue diffère de celle de la page courante. Par exemple : \<title lang="en">`Open quality standards`\</title>

Si le contenu dont la langue diffère n'est pas déjà balisé par un élément de la structure HTML existante (titre, lien, citation etc.), il est alors nécessaire d'ajouter un élément spécifique (`div` ou `span`) pour spécifier la langue de cet élément (à l'exception du contenu de l'élément `title` qui ne peut comporter de balisage interne).

En savoir plus: [`lang` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/lang)

## Contrôle

Dans chaque page examinée :

* Repérer tous les contenus rédigés dans une autre langue que la langue principale, sans oublier les contenus des attributs HTML restitués à l'utilisateur (tel que celui de l'attribut `alt` des images)
* Contrôler que la langue de ces contenus est précisée via un attribut `lang` placé sur l'élément concerné par le changement de langue (titre, lien, item de liste) ou hérité d'un élément parent.



#Accessibilité #Développement #Liens #Mobile

En contexte mobile, lorsque cette bonne pratique est respectée, le simple clic sur un numéro ouvre les fonctionnalités téléphoniques de votre mobile. C’est pratique ! Alors, certes, en contexte desktop, l’inconvénient est que cela provoque l’ouverture de logiciels comme Skype. Mais il existe des ruses pour faire en sorte de l’éviter.


## Objectif

* Faciliter l’utilisation des numéros de téléphone, notamment sur les terminaux mobiles.

## Mise en œuvre

Baliser les numéros de téléphone avec un lien `a` doté d’un attribut `href` du type `href="tel:+xx x xx xx xx xx"`.

En savoir plus: [élément `a` sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)

## Contrôle

Vérifier, dans le code HTML généré, le balisage des numéros de téléphone sous la forme a `href="tel:+xx x xx xx xx xx"`.


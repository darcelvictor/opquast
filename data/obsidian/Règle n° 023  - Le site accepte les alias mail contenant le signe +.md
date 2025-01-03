
#Données_personnelles #Développement #Privacy

Selon Wikipédia, un alias ou alias e-mail est une adresse électronique qui redirige vers une autre préexistante. Les messages envoyés à l'alias sont directement transférés, sans passer par une boîte de courrier électronique. Cette bonne pratique veille à ce que les adresses mail de la forme <nom+xxx@domaine.fr> soient acceptées par le site. Cela permet aux utilisateurs d’utiliser un mail dédié à un usage spécifique sans créer de compte mail supplémentaire. Cela permet aussi d’améliorer la traçabilité lorsque l’adresse est cédée à des tiers.


## Objectif

* Permettre aux utilisateurs d’utiliser des comptes mails dédiés à un usage spécifique.
* Permettre aux utilisateurs de tracer la diffusion de leurs adresses mail.
* Renforcer la confiance des utilisateurs sur l’utilisation de leurs données

## Mise en œuvre

Pour toute validation d'une adresse mail saisie par l'utilisateur, accepter les adresses du type `foo.bar+truc@example.com`

## Contrôle

Vérifier, pour chaque saisie d'une adresse mail saisie par l'utilisateur, que les adresses du type `foo.bar+truc@example.com` sont acceptées et sont fonctionnelles (utilisation comme identifiant, réception d'un mail envoyé par le site, etc.)


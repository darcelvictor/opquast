
Règle n° 073  - La création d'un mot de passe par l'utilisateur fait l'objet d'un mécanisme de prévention des erreurs de saisie.

#Basics #Accessibilité #Conception #Développement #Formulaires

Combien de mots de passe s’avèrent-ils finalement inutilisables à cause d’une simple erreur de saisie ou d’inattention lors de leur création ?

Objectif
--------

*   Éviter à l'utilisateur de saisir un mot de passe qui ne correspond finalement pas à celui qu'il a souhaité ou mémorisé.

Mise en œuvre
-------------

Parmi les solutions possibles :

*   Proposer, après le champ de saisie du mot de passe, un champ de confirmation où le mot de passe doit être saisi à nouveau et vérifier que les deux saisies sont effectivement identiques lors de la soumission. Dans ce cas comme dans le cas de tous les autres champs de formulaires, veiller à permettre le copier-coller dans les champs de formulaire.
*   Permettre aux utilisateurs d'afficher leur mot de passe en clair.
*   Fournir un lien ou un code de connexion unique.

La liste ci-dessus n'est pas limitative.

Contrôle
--------

Dans le cas d'une création de mot de passe :

*   Vérifier qu'un mécanisme de double saisie des mots de passe, généralement présent sous la forme de deux champs successifs, est systématiquement présent.

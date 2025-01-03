
Règle n° 198  - Un dispositif sensibilise l'utilisateur sur le degré de sécurisation du mot de passe qu'il choisit

#Basics #Accessibilité #Conception #Développement #Sécurité

Un mot de passe doit avoir un niveau minimum de complexité pour ne pas être facilement deviné à des fins malveillantes. Il est souhaitable d’avertir l’utilisateur si le mot de passe qu’il a choisi n’est pas assez complexe. Certains systèmes permettent même de l’en informer en direct pendant la saisie.

Objectif
--------

*   Informer les utilisateurs sur le niveau de sécurité du mot de passe choisi et donc sur les risques de détournement.

Mise en œuvre
-------------

La saisie du mot de passe donne lieu à une validation et à un retour indiquant son degré de sécurité, avant soumission définitive du formulaire d’inscription ou de changement de mot de passe.

Contrôle
--------

Pour tout formulaire d’inscription ou de changement de mot de passe :

*   Saisir un mot de passe et s’assurer que cette saisie donne lieu à une validation et à un retour indiquant son degré de sécurité, et ce, avant la soumission définitive du formulaire.  
    

Cette validation peut être plus ou moins exigeante : contrôle du nombre de caractères, de l’absence de l’identifiant du compte dans le mot de passe, du type de caractères présents, etc.


#Accessibilité #Conception #Développement #Navigation

Vous avez certainement vu ces liens en haut de certaines pages web. Ils permettent à certains utilisateurs d’accéder bien plus vite aux contenus.

Objectif
--------

*   Permettre aux utilisateurs qui consultent les pages de manière linéaire (mode vocal) ou semi-linéaire (écran de faible largeur) de ne pas avoir à défiler l'ensemble des éléments sur chaque page pour accéder aux contenus.
*   Fournir des raccourcis accélérant la navigation au clavier et évitant des actions au clavier répétées pour parcourir la page et atteindre la zone souhaitée.
*   Améliorer l’accessibilité des contenus aux personnes handicapées

Mise en œuvre
-------------

Fournir en début de code HTML, avant tout autre lien ou formulaire présent dans la page, les liens visant des ancres correspondantes :

*   Vers le menu principal si celui-ci n'est pas immédiatement placé après l'en-tête de page ;
*   Vers le contenu principal si celui-ci n'est pas immédiatement placé après l'en-tête de page ;
*   Vers le formulaire du moteur de recherche si celui-ci n'est pas immédiatement placé après l'en-tête de page.

Le cas échéant, ce menu d'accès rapide peut être masqué au chargement de la page et s'afficher lors de la première tabulation entrant dans celle-ci (via Javascript ou CSS).

Contrôle
--------

Cette bonne pratique gagne à être vérifiée en association avec l'ensemble des bonnes pratiques concernant la navigation au clavier puisque si ces liens d'accès rapide sont présents, ils doivent au minimum apparaître dès la première tabulation dans la page.

Lors de la navigation dans le site ou de l'inspection des templates (sous réserve de tenir compte des pages dépendants de services tiers) :

*   Vérifier la présence des liens d'accès rapide au menu, au contenu et à la recherche selon l'organisation de la page ;
*   Vérifier qu'ils sont bien placés dans le code de manière à apparaître dès la première tabulation dans la page ;
*   Vérifier qu'en cas de masquage par défaut, ils sont affichés lisiblement lors de la première tabulation, à un emplacement prévisible par l'utilisateur ;
*   Vérifier que leur fonctionnement est effectif, c'est-à-dire qu'ils permettent d'accéder au menu ou à la zone de contenu et d'y poursuivre immédiatement la navigation au clavier, ou au champ de saisie du formulaire de recherche et de procéder à la saisie.

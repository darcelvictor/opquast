
Règle n° 214  - Le serveur ne force pas la redirection vers la version ou l'application mobile.

#Développement #Mobile #Serveur_et_performances

Il est parfaitement possible de détecter un contexte d’usage et de proposer aux utilisateurs de terminaux mobiles une version du site dédiée, et de faire de même pour les utilisateurs desktop, équipés d’un ordinateur classique. Le problème, c’est que certains utilisateurs peuvent avoir besoin d’une version spécifique, soit qu’ils ne trouvent pas ce qu’ils cherchent sur la version mobile, soit que celle-ci soit moins pratique. Laissez vos utilisateurs libres de passer outre le choix que vous leur proposez par défaut.

Objectif
--------

*   Laisser le choix à l’utilisateur de la version ayant ses préférences.
*   Améliorer la compatibilité avec les terminaux mobiles

Mise en œuvre
-------------

Ne pas rediriger côté serveur vers la version mobile (en dynamic serving ou en cas de version mobile dédiée) sans possibilité pour l’utilisateur de désactiver cette redirection.

Contrôle
--------

Contrôler manuellement qu’il est possible d’accéder à la version desktop depuis un périphérique mobile.

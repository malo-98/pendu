# pendu
On mettra ici de côté le côté « pendu » à proprement parler ainsi que le tour par tour, pour se concentrer sur la mécanique de découverte du mot. Le jeu est donc orienté mono-joueur·se, et une partie consiste donc à tirer au sort un mot ou une phrase, afficher le masque associé, et proposer des saisies possibles pour toutes les lettres de l’alphabet latin. On peut alors essayer une lettre après l'autre, ce qui actualise le masque jusqu’à ce que tout le texte soit visible : on pourra alors recommencer une partie. Le but consiste donc, simplement, à trouver le texte en utilisant le moins d’essais possibles.

# Interface utilisateur
L’affichage comprend deux parties : le masque de la devinette, et une série de boutons d'essai, à raison d’un par lettre. Par exemple, deux rangées de 13.
Le masque utilise un _underscore_ ( _ ) pour toute lettre de la devinette qui n’a pas encore été révélé.
On prend soin de bien séparer visuellement chaque lettre à deviner, pour faciliter la perception des tailles des mots.
Pour simplifier la saisie et l’exploitation des lettres, on cantonnera les devinettes et les boutons à l'alphabet latin majuscule, sans signes diacritiques (accents, cédilles, etc.). Donc 26 lettres de A à Z.
Les lettres déjà essayées doivent être signalées visuellement (par exemple, grisées). Il n'est pas obligatoire d'interdire une nouvelle tentative dessus, c'est comme vous voulez.
Une fois le texte deviné, la liste des boutons de lettres est remplacée par un seul bouton qui permet de redémarrer une partie… sans avoir à recharger la page !

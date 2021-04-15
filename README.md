# assignment-api

API REST

- Liste des assignments Ajout d'un assignment
- Modification d'un assignment
- Suppression d'un assignment
- Création d'un utilisateur
- Login d'un utilisateur
- Déconnexion d'un utilisateur
- Détail d'un assignment

Base de données: Nous avons utilisé MongoDB pour la gestion des données. Nous avons utilisé les services de mongodb.com


Back end (API Rest):
- http://assignment-app-api.herokuapp.com/api/assignments
- http://assignment-app-api.herokuapp.com/api/utilisateurs
- http://assignment-app-api.herokuapp.com/api/matieres
- http://assignment-app-api.herokuapp.com/api/eleves
- http://assignment-app-api.herokuapp.com/api/assignments/{id}

Pour une utilisation locale, voici les instructions:

Il faut installer au préalable: Télecharger https://nodejs.org/en/download/

Back end (node): 
- Cloner ce repository : https://github.com/miradoharilala/assignment-api.git 
- Aller vers le dossier pour lancer l'invite de commande
- Prendre les dernières modifications en faisant un pull request: git pull
- Installer les modules dont on a besoin en lançant: npm install
- Lancer le serveur: node server.js

let Utilisateurs = require("../model/utilisateur");

// Get un utilisateur
function getUtilisateur(req, res) {
  let userId = req.params.id;

  Utilisateurs.findOne({ id: userId }, (err, utilisateur) => {
    if (err) {
      res.send(err);
    }
    res.json(utilisateur);
  });
}

// Ajout d'un utilisateur (POST)
function createUtilisateur(req, res) {
  let utilisateur = new Utilisateurs();

  utilisateur.id = req.body.id;
  utilisateur.nom = req.body.nom;
  utilisateur.email = req.body.email;
  utilisateur.motdepasse = req.body.motdepasse;

  console.log("Création User fait:");
  console.log(utilisateur);

  utilisateur.save((err) => {
    if (err) {
      res.send("L'application n'a pas pu créée l'utilisateur ", err);
    }
    res.json({ message: `${utilisateur.nom} enregistré.e!` });
  });
}

// Update d'un user (PUT)
function updateUtilisateur(req, res) {
  console.log("UPDATE recu utilisateur : ");
  console.log(req.body);
  Utilisateurs.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, utilisateur) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.json({ message: "modifié.e" });
      }
    }
  );
}

// suppression d'un utilisateur (DELETE)
function deleteUtilisateur(req, res) {
  utilisateur.findByIdAndRemove(req.params.id, (err, utilisateur) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${utilisateur.nom} supprimé.e` });
  });
}

module.exports = {
  createUtilisateur,
  getUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
};

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var Utilisateurs = require('../model/utilisateur');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

function inscription(req, res) {
  
    var motdepasseHash = bcrypt.hashSync(req.body.motdepasse, 8);
    
    Utilisateurs.create({
        id : req.body.id,
        nom : req.body.nom,
        email : req.body.email,
        motdepasse : motdepasseHash
    },

    function (err, utilisateur) {
      if (err) return res.status(500).send("Problème pour créer l'utilisateur")
      // creation de token
      var token = jwt.sign({ id: utilisateur._id }, config.secret, {
        expiresIn: 86400 // expires dans 24 heures
      });
      res.status(200).send({ auth: true, token: token });
    }); 
};

function getToken(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'Pas de Token.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Echec d authentification du token.' });

    //   res.status(200).send(decoded);

        Utilisateurs.findById(decoded.id,
            {motdepasse : 0}, 
            function (err, utilisateur) {
            if (err) return res.status(500).send("Il y a eu un problème pour trouver l'utilisateur.");
            if (!utilisateur) return res.status(404).send("Aucun utilisateur trouvé.");
            res.status(200).send(utilisateur);
           //next(utilisateur);
        });
    });
};


function login(req,res){
    Utilisateurs.findOne({ email: req.body.email }, function (err, utilisateur) {
        if (err) return res.status(500).send('Erreur dans le serveur.');
        if (!utilisateur) return res.status(404).send('Aucun utilisateur trouvé');
        
        var valide = bcrypt.compareSync(req.body.motdepasse, utilisateur.motdepasse);
        if (!valide) return res.status(401).send({ auth: false, token: null });
        
        var token = jwt.sign({ id: utilisateur._id }, config.secret, {
          expiresIn: 86400
        });
        
        res.status(200).send({ auth: true, token: token });
      });
};

function logout(req,res){
    res.status(200).send({ auth: false, token: null });
};

module.exports = {
    inscription,
    getToken,
    login,
    logout
};
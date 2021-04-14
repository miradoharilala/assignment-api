let mongoose = require('mongoose');  

let Schema = mongoose.Schema;

let UtilisateurSchema = Schema({  
  id:Number,
  nom: String,
  email: String,
  motdepasse: String
});

// mongoose.model('Utilisateurs', UserSchema);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Utilisateurs', UtilisateurSchema);
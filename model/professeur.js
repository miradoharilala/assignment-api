let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let ProfesseurSchema = Schema({
    id: Number,
    nom: String,
    photo: String
});

ProfesseurSchema.plugin(aggregatePaginate);


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Professeur', ProfesseurSchema);

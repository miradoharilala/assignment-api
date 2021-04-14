let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    id: Number,
    nom: String,
    professeur: {
        id: Number,
        nom: String,
        photo: String
    },
    image: String
});

MatiereSchema.plugin(aggregatePaginate);


// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Matiere', MatiereSchema);
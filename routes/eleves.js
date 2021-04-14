let Eleve = require("../model/eleve");

/* Version sans pagination */
// Récupérer tous les assignments (GET)
/*
function getAssignments(req, res){
    Assignment.find((err, assignments) => {
        if(err){
            res.send(err)
        }

        res.send(assignments);
    });
}
*/

// Récupérer tous les assignments (GET), AVEC PAGINATION
function getEleves(req, res) {
  const key = req.query.key || '';

  Eleve.find(
      {
        nom: { $regex: key }
      },
    (err, eleves) => {
      if (err) {
        res.send(err)
      }

      res.send(eleves);
    });
}

module.exports = {
  getEleves
};

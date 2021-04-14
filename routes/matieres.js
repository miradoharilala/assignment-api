let Matiere = require("../model/matiere");

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
function getMatieres(req, res) {
  const key = req.query.key || '';

  Matiere.find(
    { $or: [
      {
        nom: { $regex: key }
      },
    ] },
    (err, matieres) => {
      if (err) {
        res.send(err)
      }

      res.send(matieres);
    });
}

module.exports = {
  getMatieres
};

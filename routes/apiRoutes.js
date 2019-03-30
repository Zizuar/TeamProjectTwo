var db = require("../models");
module.exports = function(app) {
  // Get all examples
  app.get("/match/:age/:gender/:zip", function(req, res) { 
    db.Match.findAll({
      where: {
        gender: req.params.preference,
        age: {
          $between: [req.params.age - 5, req.params.age + 5]
        }
      }
    }).then(function(dbMatches) {
      res.render("match", {
        results: dbMatches
        
      });
      console.log(dbMatches);
    });
  });

  // Create a new example
  app.post("/api/match", function(req, res) {
    db.Match.create({
      age: req.body.age,
      gender: req.body.gender,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      zip: req.body.zipCode,
      preference: req.body.preference
    }).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });
}
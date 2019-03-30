var db = require("../models");
module.exports = function(app) {
  // Get all examples
  app.get("/match/:age/:preference/:zip", function(req, res) { 
    db.Match.findAll({
      where: {
        gender: req.params.preference,
        age: {
          $between: [parseInt(req.params.age) - 5,parseInt(req.params.age) + 5]
        },
        zip: {
          $between: [parseInt(req.params.zip) - 50, parseInt(req.params.zip) + 50]
        }
      }
    }).then(function(dbMatches) {
      const matchesArr = dbMatches.map(match => {
        return {age: match.age,
        zipcode: match.zip,
        gender: match.gender,
        name: match.name,
        email: match.email
        }
      })
      res.render("match", {
        results: matchesArr
        
      });
      
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
var db = require("../models");
module.exports = function(app) {
  // Get all examples
<<<<<<< HEAD
  app.get("/api/match", function(req, res) {
    db.Match.findAll({}).then(function(dbMatches) {
      res.json(dbMatches);
=======
  app.get("/match/:age/:gender/:zip", function(req, res) { 
    db.Match.findAll({
      where: {
        gender: req.params.preference,
        age: {
          $between: [req.params.age - 5, req.params.age + 5]
        },
        zip: {
          $between: [req.params.zip - 50, req.params.zip +50]
        }
      }
    }).then(function(dbMatches) {
      res.render("match", {
        results: dbMatches
        
      });
      console.log(dbMatches);
>>>>>>> adeafb4c4dabd393bdb0e2a49317251b505e2e89
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
<<<<<<< HEAD
      zip: req.body.zipCode
    }).then(function(dbMatch) {
      res.json(dbMatch);
      // app.get("/api/users/:age", function(req, res) {
      //   // db.Example.findAll({where: { [Example.age]: [req.params.age+ 5,req.params.age- 5] }}).then(function(dbExamples) {
      //   //   res.json(dbExamples);
      //   // });
      //   res.json({test})
      // });
=======
      zip: req.body.zipCode,
      preference: req.body.preference
    }).then(function(dbMatch) {
      res.json(dbMatch);
>>>>>>> adeafb4c4dabd393bdb0e2a49317251b505e2e89
    });
  });
};

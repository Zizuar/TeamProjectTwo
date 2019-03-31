var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/match", function(req, res) {
    db.Match.findAll({}).then(function(dbMatches) {
      res.json(dbMatches);
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
      zip: req.body.zipCode
    }).then(function(dbMatch) {
      res.json(dbMatch);
      // app.get("/api/users/:age", function(req, res) {
      //   // db.Example.findAll({where: { [Example.age]: [req.params.age+ 5,req.params.age- 5] }}).then(function(dbExamples) {
      //   //   res.json(dbExamples);
      //   // });
      //   res.json({test})
      // });
    });
  });
};

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
    
    
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  

  // Create a new example
  app.post("/api/match", function(req, res) {
    db.Friend.create(req.body).then(function(dbmatchfinder) {
      res.json(dbmatchfinder);
  // app.get("/api/users/:age", function(req, res) {
  //   // db.Example.findAll({where: { [Example.age]: [req.params.age+ 5,req.params.age- 5] }}).then(function(dbExamples) {
  //   //   res.json(dbExamples);
  //   // });
  //   res.json({test})
  // });
    });
  });
}
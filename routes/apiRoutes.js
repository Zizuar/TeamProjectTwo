var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
    
    
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  app.get("/api/match", function(req, res) {
  
    
    db.Friend.findAll({}).then(function(dbmatchfinder) {
      res.json(dbmatchfinder);
    });
  });

  // Create a new example
  app.post("/api/match", function(req, res) {
    db.Friend.create(req.body).then(function(dbmatchfinder) {
      res.json(dbmatchfinder);
    });
  });

  // Delete an example by id
  app.delete("/api/match/:id", function(req, res) {
    db.Friend.destroy({ where: { id: req.params.id } }).then(function(dbfriendfinder) {
      res.json(dbmatchfinder);
    });
  });
};

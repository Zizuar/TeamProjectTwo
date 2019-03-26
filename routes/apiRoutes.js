var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
    
    
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  app.get("/api/friend", function(req, res) {
  
    
    db.Friend.findAll({}).then(function(dbfriendfinder) {
      res.json(dbfriendfinder);
    });
  });

  // Create a new example
  app.post("/api/friend", function(req, res) {
    db.Friend.create(req.body).then(function(dbfriendfinder) {
      res.json(dbfriendfinder);
    });
  });

  // Delete an example by id
  app.delete("/api/friend/:id", function(req, res) {
    db.Friend.destroy({ where: { id: req.params.id } }).then(function(dbfriendfinder) {
      res.json(dbfriendfinder);
    });
  });
};

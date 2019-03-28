var db = require("../models");
// var path = require("path");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/users/:age", function(req, res) {
  //   // db.Example.findAll({where: { [Example.age]: [req.params.age+ 5,req.params.age- 5] }}).then(function(dbExamples) {
  //   //   res.json(dbExamples);
  //   // });
  //   res.json({test})
  // });
  Friend.findAll({
    where: {
      gender: req.params.genderPreference,
      age: {
        $between: [req.params.age - 5, req.params.age + 5]
      }
    }
  }).then(function(result) {
    return res.json(result);
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};

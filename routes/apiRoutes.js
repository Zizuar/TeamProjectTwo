var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/users/:age", function(req, res) {
  //   // db.Example.findAll({where: { [Example.age]: [req.params.age+ 5,req.params.age- 5] }}).then(function(dbExamples) {
  //   //   res.json(dbExamples);
  //   // });
  //   res.json({test})
  // });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.Example.create(req.body).then(function(dbMatch) {
      res.json(dbMatch);
    });
  });
};

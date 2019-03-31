var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
<<<<<<< HEAD
  // Load example page and pass in an example by id
  app.get("/match/:age/:zipcode/:gender", function(req, res) {
    // edit the checking here
    db.Match.findAll({ where: { id: req.params.id } }).then(function(dbMatch) {
      res.render("match", {
        results: dbMatch
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
=======
  app.get("/api/match", function(req, res) { 
    db.Match.findAll({}).then(function(dbMatches) {
      res.json(dbMatches);
    });
  });
  // Render 404 page for any unmatched routes
  app.get("/*", function (req, res) {
>>>>>>> adeafb4c4dabd393bdb0e2a49317251b505e2e89
    res.render("404");
  });
};

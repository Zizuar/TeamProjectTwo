var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/contact", function (req, res) {
    res.render("contact");
  });
  app.get("/api/match", function(req, res) { 
    db.Match.findAll({}).then(function(dbMatches) {
      res.json(dbMatches);
    });
  });
  // Render 404 page for any unmatched routes
  app.get("/*", function(req, res) {
    res.render("404");
  });
};

var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  // Load example page and pass in an example by id
  app.get("/match/:age/:zipcode/:gender", function (req, res) {
    // edit the checking here
    db.Match.findAll({ where: { id: req.params.id } }).then(function (dbMatch) {
      res.render("match", {
        results: dbMatch
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

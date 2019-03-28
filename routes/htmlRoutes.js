var db = require("../models");
// var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index")        
   });
  // Load example page and pass in an example by id
  app.get("/matches", function(req, res) {
    // edit the checking here
    db.Example.findAll({ where: { id: req.params.id } }).then(function(dbMatch) {
      res.render("result",{
        results: dbMatch
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

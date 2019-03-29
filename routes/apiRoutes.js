import { Match as _Match } from "../models";

export default function (app) {
  app.get("/api/examples", function(_req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  app.post("/api/match", function (req, res) {
    _Match.create(req.body).then(function (dbmatchfinder) {
      res.json(dbmatchfinder);
      app.get("/api/users/:age", function (req, res) {
        Match.findAll({
          where: {
            gender: req.params.genderPreference,
            age: {
              $between: [req.params.age - 5, req.params.age + 5]
            }
          }
        }).then(function (result) {
          return res.json(result);
        });
      })
    });
  });
}
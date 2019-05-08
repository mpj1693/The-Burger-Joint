const burgers = require("../models/burgers");

module.exports = app => {

  app.get("/api/burgers", function(req, res) {
    burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/burgers", function(req, res) {
    burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  app.get("/api/burgers/:id", function(req, res) {
    burgers.findById(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.put("/api/burgers/:id", function(req, res) {
    burgers.update(req.body.eaten, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}

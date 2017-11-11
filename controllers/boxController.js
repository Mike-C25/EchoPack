// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// GET route for getting all of the forums
  app.get("/api/box", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbBox) {
      // We have access to the forums as an argument inside of the callback function
      res.json(dbBox);
    });
  });

  // POST route for saving a new forum
  app.post("/api/box", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.EchoPack.create({
      // Elements we need to edit for forums
      // title, author
      // text: req.body.text,
      // complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting forums. You can access the forum's id in req.params.id
  app.delete("/api/box/:id", function(req, res) {

  });

  // PUT route for updating forums. The updated forum will be available in req.body
  app.put("/api/box", function(req, res) {

  });
};
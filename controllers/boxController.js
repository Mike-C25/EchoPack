// Grabbing our models

var db = require("../models"); // May need to specify .js file

// Routes
// =============================================================
module.exports = function(app) {

// GET route for getting all of the forums(boxes) or specific one
  app.get("/api/:Box?", function(req, res) {
    if (req.params.Box){
      // findAll returns all entries for a table when used with no options
      db.Box.findOne({
        where: {
          title: req.params.Box
        }
      }).then(function(dbBox) {
        // We have access to the forums as an argument inside of the callback function
        res.json(dbBox);
      });
    }

    else{
      // findAll returns all entries for a table when used with no options
      db.Box.findAll({
        // limit: 3,
        // order: [[sequelize.col('score'), 'DESC']]
      }).then(function(dbBox) {
        // We have access to the forums as an argument inside of the callback function
        res.json(dbBox);
      });
    }
  });

  // POST route for saving a new forum
  app.post("/api/newBox", function(req, res) {
    
    console.log("Box Data:");
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Box.create({
      authorUserId: "", // ???
      title: req.body.title,
      description: req.body.description
      // text: req.body.text,
      // complete: req.body.complete
    }).then(function(dbBox) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBox);
    });
  });

 // DELETE route for deleting box. We can get the id of the box to be deleted from
  // req.params.id
  app.delete("/api/Box/:id", function(req, res) {
    // We just have to specify which box we want to destroy with "where"
    db.Box.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBox) {
      res.json(dbBox);
    });

  });

  // PUT route for updating box. We can get the updated box data from req.body
  app.put("/api/Box", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Box.update({
      title: req.body.title,
      description: req.body.description
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBox) {
      res.json(dbBox);
    });
  });

};
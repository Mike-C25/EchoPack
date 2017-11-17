// Grabbing our models

var db = require("../models"); // May need to specify .js file
var passport = require("../config/passport"); // configured passport 

// Routes
// =============================================================

module.exports = function(app) {


// The following is the post route for authentication. 

  app.post('/api/login', 
    passport.authenticate('local'), function(req,res) {
       res.redirect("/");
    });

 
//##################################################################################################
// GET route for getting all of the users or specific one
// ############### COMMENTING OUT FOR NOW AS PASSPORT AS REPLACED THE NEED FOR THIS BELOW ########
  // app.get("/api/:User?", function(req, res) {
  //   if (req.params.User){
  //     // findAll returns all entries for a table when used with no options
  //     db.User.findOne({
  //       where: {
  //         userName: req.params.userName,
  //         password: req.params.pass
  //       }
  //     }).then(function(dbUser) {
  //       // We have access to the Useres as an argument inside of the callback function
  //       res.json(dbUser);
  //     });

  //   }

  //   else{
  //     // findAll returns all entries for a table when used with no options
  //     db.User.findAll({
  //       // limit: 3,
  //       // order: [[sequelize.col('score'), 'DESC']]
  //     }).then(function(dbUser) {
  //       // We have access to the forums as an argument inside of the callback function
  //       res.json(dbUser);
  //     });
  //   }
  // });
// ###############################################################################################

//
// POST route for saving a new User
  app.post("/api/User", function(req, res) {
    
    console.log("User Data:");
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. (req.body)
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
      
    }).then(function(dbUser) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUser);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

// DELETE route for deleting User
  app.delete("/api/User/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

// PUT route for updating User
  app.put("/api/User", function(req, res) {
    db.User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    },
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
  });
  });


};

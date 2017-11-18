// Grabbing our models

var db = require("../models"); // May need to specify .js file

// // Routes
// // =============================================================

module.exports = function(app) {

    app.get("/box", function(req, res) {
        if (req.query.t) {
            // findAll returns all entries for a table when used with no options
            db.Box.findOne({
                where: {
                    title: req.query.t
                }
            }).then(function(data) {
                console.log(data.dataValues.id);

                db.Post.findAll({
                    where: {
                        id: data.dataValues.id
                    },
                    limit: 10
                }).then(function(dbPost) {
                    let hbsObj = {
                        post: dbPost
                    }
                    console.log(hbsObj);
                    // We have access to the Boxes as an argument inside of the callback function
                    res.render("forum", hbsObj);
                });
                // res.render("forum");
            });
        }

        //     db.Post.findAll({
        //         where: {
        //             title: req.params.Box
        //         },
        //         limit: 10
        //     }).then(function(dbBox) {
        //         let hbsObj = {
        //             post: dbBox
        //         }
        //         console.log(JSON.stringify(dbBox));
        //         // We have access to the Boxes as an argument inside of the callback function
        //         res.render("forum", hbsObj);
        //     });
        // } else {
        //     console.log("This is supposed to redirect you to 404 but we don't have one sorry.")
        //     res.redirect('/');
        // }


        // res.render("forum");
    })
    // app.get("/box", function(req, res) {
    //     console.log("HELLO???");
    //     if (req.query.t) {
    //         // findAll returns all entries for a table when used with no options

    //           console.log(req.query.t);
    //         db.Box.findAll({
    //             where: {
    //                 title: req.params.Box
    //             },
    //             limit: 10
    //         }).then(function(dbBox) {
    //             let hbsObj = {
    //                 post: dbBox
    //             }
    //             console.log(JSON.stringify(dbBox));
    //             // We have access to the Boxes as an argument inside of the callback function
    //             res.render("forum", hbsObj);
    //         });
    //     } else {
    //         console.log("This is supposed to redirect you to 404 but we don't have one sorry.")
    //         res.redirect('/');
    //     }


    // });
    // // GET route for getting all of the forums(boxes) or specific one
    //   app.get("/api/:Box?", function(req, res) {
    //     if (req.params.Box){
    //       // findAll returns all entries for a table when used with no options
    //       db.Box.findOne({
    //         where: {
    //           title: req.params.Box
    //         }
    //       }).then(function(dbBox) {
    //         // We have access to the Boxes as an argument inside of the callback function
    //         res.json(dbBox);
    //       });

    //     }

    //     else{
    //       // findAll returns all entries for a table when used with no options
    //       db.Box.findAll({
    //         // limit: 3,
    //         // order: [[sequelize.col('score'), 'DESC']]
    //       }).then(function(dbBox) {
    //         // We have access to the forums as an argument inside of the callback function
    //         res.json(dbBox);
    //       });
    //     }


    // POST route for saving a new forum
    app.post("/api/box/:title", function(req, res) {
        console.log("created");
        console.log("Box Data:");
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.Box.create({
                // authorUserId: "", // ???
                title: req.body.forumTitle,
                description: req.body.forumDescription
                // text: req.body.text,
                // complete: req.body.complete
            }).then(function(dbBox) {
                // We have access to the new todo as an argument inside of the callback function
                console.log("success");
                res.send(dbBox);
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.send(err);
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
    app.put("/api/Box/", function(req, res) {
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
            })
            .catch(function(err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });


};
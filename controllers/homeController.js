var express = require("express");

var router = express.Router();

var db = require('../models');

router.get("/", function(req, res) {
    // res.render("home");
    db.Box.findAll({
        // order:[[sequelize.col('colName'), 'DESC']]
    }).then(function(dbBox) {

        let hbsObject = {
            box: dbBox
        }
        res.render("home", hbsObject);
    });
})

router.get("/userpage", function(req, res) {
    res.render("userpage");
})

router.get("/create", function(req, res) {
    res.render("forumcreate")
})

// /box/:forum name


// /post/:post title
// router.get("/post/:pt?", function(req, res) {
//     res.render("postpage");
// })

// router.get("/api/topthree", function(req, res) {


// });

router.get("/api/usercount", function(req, res) {
    db.User.findAndCountAll({})
        .then(dbBox => {
            // console.log("Count:" + result.count);
            // console.log(result.rows);
            res.send(dbBox);
        });

});

router.get("/api/checkbox", function(req, res) {
    console.log("triggered single box");
    console.log(req.query.data.box);
    db.Box.findOne({
        where: {
            title: req.query.data.box
        }
    }).then(function(dbBox) {
        // We have access to the Boxes as an argument inside of the callback function
        console.log(dbBox);
        res.send(dbBox);
    }).catch(function(err) {
        res.send(err);
    })

});


module.exports = router;

//Get most popular posts
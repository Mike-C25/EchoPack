var express = require("express");

var router = express.Router();

var db = require('../models');

router.get("/", function(req, res) {
    // res.render("home");
    db.Box.findAll({
        limit: 3,
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
router.get("/post/:pt?", function(req, res) {
    res.render("postpage");
})

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


module.exports = router;

//Get most popular posts
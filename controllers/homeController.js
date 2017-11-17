var express = require("express");

var router = express.Router();

var db = require('../models');

router.get("/", function(req, res) {
    res.render("home");
})

router.get("/userpage", function(req, res) {
    res.render("userpage");
})

router.get("/create", function(req, res) {
    res.render("forumcreate")
})

// /box/:forum name
router.get("/box/:fn?", function(req, res) {
    res.render("forum");
})

// /post/:post title
router.get("/post/:pt?", function(req, res) {
    res.render("postpage");
})

router.get("/api/topthree", function(req, res) {
    db.Box.findAll({
        limit: 3,
        // order:[[sequelize.col('colName'), 'DESC']]
    }).then(function(dbBox) {
        console.log(dbBox);
        res.send(dbBox);
    });


});

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
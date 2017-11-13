var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
	res.render("home");
})

router.get("/userpage", function(req,res){
	res.render("userpage");
})


// /box/:forum name
router.get("/box/:fn?", function(req,res){
	res.render("forum");
})

// /post/:post title
router.get("/post/:pt?", function(req,res){
	res.render("postpage");
})

module.exports = router;

//Get most popular posts
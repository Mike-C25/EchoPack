var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
	res.render("home");
})

router.get("/userpage", function(req,res){
	res.render("userpage");
})


module.exports = router;

//Get most popular posts
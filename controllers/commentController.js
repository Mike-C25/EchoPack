var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

app.post("/api/:forum/:title", function(req, res) {
    db.Post.create({
        BoxId: req.body.boxID,
        UserId: 1,
        title: req.body.postTitle,
        content: req.body.postContent
    }).then(function(dbPost) {
        res.json(dbPost);
    });
});

};
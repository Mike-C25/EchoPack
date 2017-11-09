module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    id: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    replyToId: DataTypes.STRING,
    content:  DataTypes.STRING,
    authorUserId:  DataTypes.STRING,
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date TIMESTAMP NOT NULL
  });
  return Comment;
};
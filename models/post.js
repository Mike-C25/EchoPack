module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    id: DataTypes.INTEGER,
    boxId: DataTypes.INTEGER,
    title: DataType.STRING,
    content:  DataTypes.STRING,
    authorUserId:  DataTypes.STRING,
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date TIMESTAMP NOT NULL
  });
  return Post;
};
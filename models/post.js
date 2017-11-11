module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    boxId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content:  DataTypes.STRING,
    authorUserId:  DataTypes.STRING,
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date: DataTypes.DATE
  });
  return Post;
};
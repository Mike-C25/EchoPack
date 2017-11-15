module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    postId: DataTypes.INTEGER,
    replyToId: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    authorUserId:  DataTypes.STRING,
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date: DataTypes.DATE
  });
  return Comment;
};
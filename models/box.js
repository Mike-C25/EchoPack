module.exports = function(sequelize, DataTypes) {
  var Box = sequelize.define("Box", {
    id: DataTypes.INTEGER,
    authorUserId: DataTypes.INTEGER,
    title: DataType.STRING,
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date TIMESTAMP NOT NULL
  });
  return Box;
};
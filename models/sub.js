module.exports = function(sequelize, DataTypes) {
  var Sub = sequelize.define("Sub", {
    id: DataTypes.INTEGER,
    authorUserId: DataTypes.INTEGER,
    title: DataType.STRING,
    score:  DataTypes.INTEGER,
    sentimentScore: DataTypes.INTEGER,
    Date TIMESTAMP NOT NULL
  });
  return Sub;
};
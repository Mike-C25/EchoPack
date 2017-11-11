module.exports = function(sequelize, DataTypes) {
  var Box = sequelize.define("Box", {
    id: DataTypes.INTEGER,
    authorUserId: DataTypes.INTEGER,
    title: DataType.STRING,
    description: DataType.STRING,
    score:  {
    	DataTypes.INTEGER,
    	defaultValue: 1 
    }
    sentimentScore: DataTypes.INTEGER,
    Date TIMESTAMP NOT NULL
  });
  return Box;
};
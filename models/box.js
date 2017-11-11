module.exports = function(sequelize, DataTypes) {
  var Box = sequelize.define("Box", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    authorUserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    score:  {
    	type: DataTypes.INTEGER,
    	defaultValue: 1 
    },
    sentimentScore: DataTypes.INTEGER,
    Date: DataTypes.DATE
  });
  return Box;
};
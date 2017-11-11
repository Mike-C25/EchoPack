module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName:  DataTypes.STRING,
    email:  DataTypes.STRING,
    password:  DataTypes.STRING,
    score:  DataTypes.INTEGER
  });
  return User;
};
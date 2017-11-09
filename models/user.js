module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName:  DataTypes.STRING,
    email:  DataTypes.STRING,
    password:  DataTypes.STRING,
    score:  DataTypes.INTEGER
  });
  return User;
};
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define("Match", {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    zip: DataTypes.MEDIUMINT,
    gender: DataTypes.ENUM("M", "F"),
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    last_login: DataTypes.DATE,
    preference: DataTypes.INTEGER,
    facebookurl: DataTypes.STRING
  });
  return Match;
};

 module.exports = function (sequelize, DataTypes) {
  const Match = sequelize.define("Match", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    zip: DataTypes.MEDIUMINT,
    gender: DataTypes.ENUM("M", "F"),
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    fbLink: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    created_at: DataTypes.DATE,
    // eslint-disable-next-line camelcase
    last_login: DataTypes.DATE,
    preference: DataTypes.ENUM("M", "F"),
  });
  return Match;
}
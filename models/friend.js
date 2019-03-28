module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define("friend", {
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    zip: DataTypes.MEDIUMINT,
    gender: DataTypes.ENUM("M", "F"),
    password: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    created_at: DataTypes.DATETIME,
    // eslint-disable-next-line camelcase
    last_login: DataTypes.DATETIME,
    preference: DataTypes.INTEGER
  });
  return friend;
};

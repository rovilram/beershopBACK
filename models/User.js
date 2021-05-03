const { DataTypes } = require('sequelize');
const db = require('../server');

exports.User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.BOOLEAN,
  },
});

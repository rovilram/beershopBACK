const { DataTypes } = require('sequelize');
const db = require('../data/databaseServer');

Company = db.define('Company', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  CIF: {
    type: DataTypes.STRING,
    unique: true,
  },
  address: DataTypes.STRING,
});

module.exports = Company;

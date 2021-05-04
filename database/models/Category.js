const { DataTypes } = require('sequelize');
const db = require('../db');

Category = db.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
});

module.exports = Category;
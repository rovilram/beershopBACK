const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log('DB', process.env.DB_USER);
const db = new Sequelize(
  process.env.DB_DB,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
);

module.exports = db;

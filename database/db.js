const { Sequelize } = require('sequelize');
require('dotenv').config();

const DB_DB = process.env.DB_DB || 'beerShop';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASS = process.env.DB_PASS || '';
const DB_HOST = process.env.DB_HOST || 'localhost';

console.log('DB', process.env.DB_USER);
const db = new Sequelize(DB_DB, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false,
});

module.exports = db;

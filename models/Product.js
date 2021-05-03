const { DataTypes } = require('sequelize');
const db = require('../data/databaseServer');
const  Category  = require('./Category');
const  Company  = require('./Company');

Product = db.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  style: {
    type: DataTypes.STRING,
  },
  price: DataTypes.FLOAT,
  valoration: DataTypes.INTEGER,
});

Category.hasMany(Product);
Product.belongsTo(Category);

Company.hasMany(Product);
Product.belongsTo(Company);

module.exports = Product;

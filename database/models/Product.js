const { DataTypes } = require('sequelize');
const db = require('../db');
const Category = require('./Category');
const Company = require('./Company');

Product = db.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  photo: DataTypes.STRING,
  style: {
    type: DataTypes.STRING,
  },
  price: DataTypes.FLOAT,
  valoration: DataTypes.INTEGER,
});

Category.hasMany(Product, { foreignKey: 'CategoryId' });
Product.belongsTo(Category);

Company.hasMany(Product);
Product.belongsTo(Company, { foreignKey: 'CompanyId' });

module.exports = Product;

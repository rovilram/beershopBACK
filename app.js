const express = require('express');
const app = express();
const db = require('./data/databaseServer');
const { Op } = require('sequelize');
const Product = require('./models/Product');

require('dotenv').config();

const dbTest = async () => {
  try {
    await db.authenticate();
    console.log('database connected');
  } catch (error) {
    throw new Error(error);
  }
};
dbTest();

const createTables = async () => {
  try {
    await db.sync({ force: true });
    console.log('creada tablas de modelos de Datos');
  } catch (error) {
    console.log('Error al crear las tablas', error);
  }
};

const insertUser = async (firstName, email, state) => {
  try {
    const response = await User.create({ firstName, email, state });
    console.log('Datos insertados correctamente', response.toJSON());
    response.firstName = 'Pepito';
    response.save();
    console.log('Datos modificados correctamente', response.toJSON());
    response.destroy();
    console.log('Datos DESTRUIDOS!!!! correctamente', response.toJSON());
  } catch (error) {
    console.log('Error al insertar datos', error);
  }
};

const selectProduct = async (name) => {
  try {
    const products = await Product.findAll({
      where: {
        CategoryId: 1,
      },
    });
    console.log('Búsqueda de productos', JSON.stringify(products, null, 2));
  } catch (error) {
    console.log('Error en el select de la tabla Users', error);
  }
};

//createTables();
//insertUser('Roberto', 'roberto@to.es', true);
selectProduct('arr');

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

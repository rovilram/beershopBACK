const express = require('express');
const app = express();

const db = require('./server');
const { Op } = require('sequelize');

const { User } = require('./models/User');

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

const selectUsers = async (firstName, email, state) => {
  try {
    const users = await User.findAll({
      where: {
        firstname: { [Op.substring]: firstName },
        email: { [Op.substring]: email },
        state,
      },
    });
    console.log('Búsqueda de usuarios', JSON.stringify(users, null, 2));
  } catch (error) {
    console.log('Error en el select de la tabla Users', error);
  }
};

//createTables();
//insertUser('Roberto', 'roberto@to.es', true);
selectUsers('iro', 'ro', true);

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

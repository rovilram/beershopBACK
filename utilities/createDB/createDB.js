const { Sequelize } = require('sequelize');
const { User } = require('../../models/User');

const createDB = async () => {
  const sequelize = new Sequelize('', 'root', '', {
    dialect: 'mysql',
  });

  return await sequelize.query('CREATE DATABASE `test`;');
  //.then((data) => console.log(data.toJSON()));
};

const insertUser = async (firstName, email, state) => {
  try {
    const response = await User.create({ firstName, email, state });
    console.log('Datos insertados correctamente', response.toJSON());
  } catch (error) {
    console.log('Error al insertar datos', error);
  }
};

const init = async () => {
  try {
    console.log(await createDB());
  } catch (error) {
    console.log('Error al crear base de datos:', error.message);
  }

  try {
    User.sync();
    console.log('Tabla Users creada con éxito');
  } catch (error) {
    console.log('Error al crear la tabla Users:', error);
  }

  insertUser('Roberto', 'rober@r.es', true);
  insertUser('Antonio', 'anth@an.com', false);
  insertUser('Pepito', 'pepito@palot.es', true);
  insertUser('Lorenzo', 'loren@ipsum.es', false);
  insertUser('Ramiro', 'ramiro@vender.es', true);
  insertUser('Rodolfo', 'rodolfo@langostino.com', false);
  insertUser('Elena', 'elena@nietodelbosque.es', false);
  insertUser('Orlando', 'orlando@aquihaytomate.es', true);
  insertUser('Peter', 'peter@bread.com', true);
};

init();

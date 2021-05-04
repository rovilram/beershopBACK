const { Sequelize } = require('sequelize');
const Company = require('../../database/models/Company');
const Category = require('../../database/models/Category');
const Product = require('../../database/models/Product');

require('dotenv').config();


const DB_HOST = process.env.DB_HOST;
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;
const DB_DB = process.env.DB_DB;


const beersData = [
  {
    id: 1,
    name: 'La Pirata & Laugar Brewery Blackadder',
    photo:
      'https://static2.soloartesanas.es/3215-large_default/la-pirata-laugar-brewery-blackadder.jpg',
    style: 'Imperial Porter',
    price: 3.52,
    valoration: 85,
    CompanyId: 1,
    CategoryId: 1,
  },
  {
    id: 2,
    name: 'Laugar Basurde',
    photo:
      'https://static2.soloartesanas.es/2958-large_default/laugar-basurde.jpg',
    style: 'Amber Ale',
    price: 4.25,
    valoration: 74,
    CompanyId: 1,
    CategoryId: 1,
  },
  {
    id: 3,
    name: 'La Calavera & Laugar Brewery Hop Drama',
    photo:
      'https://static3.soloartesanas.es/3177-large_default/la-calavera-laugar-brewery-hop-drama.jpg',
    style: 'Session India Pale Lager',
    price: 3.24,
    valoration: 71,
    CompanyId: 1,
    CategoryId: 1,
  },
  {
    id: 4,
    name: 'Sagra Bohío',
    photo:
      'https://static2.soloartesanas.es/3231-large_default/sagra-bohio.jpg',
    style: 'Strong Ale',
    price: 3.5,
    valoration: 95,
    CompanyId: 2,
    CategoryId: 1,
  },
  {
    id: 5,
    name: 'Sagra Suxinsu',
    photo:
      'https://static2.soloartesanas.es/3232-large_default/sagra-suxinsu.jpg',
    style: 'Belgian Strong Ale',
    price: 3.0,
    valoration: 78,
    CompanyId: 2,
    CategoryId: 1,
  },
  {
    id: 6,
    name: 'Menduiña Santa Compaña',
    photo:
      'https://static2.soloartesanas.es/3131-large_default/menduina-santa-compana.jpg',
    style: 'Barley Wine Madurada',
    price: 4.14,
    valoration: 70,
    CompanyId: 3,
    CategoryId: 1,
  },
  {
    id: 7,
    name: 'Menduiña Demo Neghro',
    photo:
      'https://static3.soloartesanas.es/3127-large_default/menduina-demo-neghro.jpg',
    style: 'Extra Stout',
    price: 3.17,
    valoration: 65,
    CompanyId: 3,
    CategoryId: 1,
  },
  {
    id: 8,
    name: 'Menduiña Barda',
    photo:
      'https://static2.soloartesanas.es/3126-large_default/menduina-barda.jpg',
    style: 'Pale Ale',
    price: 2.98,
    valoration: 55,
    CompanyId: 3,
    CategoryId: 1,
  },
  {
    id: 9,
    name: 'ISR31 Stout',
    photo:
      'https://static2.soloartesanas.es/2646-large_default/isr31-stout.jpg',
    style: 'Stout',
    price: 3.0,
    valoration: 88,
    CompanyId: 4,
    CategoryId: 1,
  },
  {
    id: 10,
    name: 'TR25 Dubbel',
    photo:
      'https://static3.soloartesanas.es/2645-large_default/tr25-dubbel.jpg',
    style: 'Abbey Dubbel',
    price: 3.0,
    valoration: 58,
    CompanyId: 4,
    CategoryId: 1,
  },
  {
    id: 11,
    name: 'Mustache Negra Marinera',
    photo:
      'https://static3.soloartesanas.es/1178-large_default/mustache-negra-marinera.jpg',
    style: 'Brown Ale',
    price: 2.89,
    valoration: 81,
    CompanyId: 5,
    CategoryId: 1,
  },
  {
    id: 12,
    name: 'Mustache Blanca de Trigo',
    photo:
      'https://static1.soloartesanas.es/328-large_default/mustache-cervezas.jpg',
    style: 'Weizen-Weissbier',
    price: 2.89,
    valoration: 62,
    CompanyId: 5,
    CategoryId: 1,
  },
  {
    id: 13,
    name: 'Arriaca Imperial Russian Stout',
    photo:
      'https://static3.soloartesanas.es/3446-large_default/arriaca-imperial-russian-stout.jpg',
    style: 'Russian Imperial Stout',
    price: 2.46,
    valoration: 52,
    CompanyId: 6,
    CategoryId: 1,
  },
  {
    id: 14,
    name: 'Arriaca Porter',
    photo:
      'https://static1.soloartesanas.es/3442-large_default/arriaca-imperial-porter.jpg',
    style: 'Porter',
    price: 2.49,
    valoration: 59,
    CompanyId: 6,
    CategoryId: 1,
  },
  {
    id: 15,
    name: 'Arriaca Centeno',
    photo:
      'https://static1.soloartesanas.es/3443-large_default/arriaca-centeno.jpg',
    style: 'Rye India Pale Lager',
    price: 4.14,
    valoration: 68,
    CompanyId: 6,
    CategoryId: 1,
  },
  {
    id: 16,
    name: 'Dawat One-Off Inch Smoked Beer Bourbon',
    photo:
      'https://static3.soloartesanas.es/2746-large_default/one-off-inch-smoked-beer-bourbon.jpg',
    style: 'Smoke Flavored and Wood Aged Beer',
    price: 2.95,
    valoration: 86,
    CompanyId: 7,
    CategoryId: 1,
  },
  {
    id: 17,
    name: 'Dawat 7',
    photo: 'https://static2.soloartesanas.es/858-large_default/dawat-7.jpg',
    style: 'Pilsner',
    price: 1.96,
    valoration: 50,
    CompanyId: 7,
    CategoryId: 1,
  },
  {
    id: 18,
    name: 'Dawat Pedro Ximénez',
    photo:
      'https://static1.soloartesanas.es/2748-large_default/pedro-ximenez.jpg',
    style: 'Specialty Beer',
    price: 2.12,
    valoration: 87,
    CompanyId: 7,
    CategoryId: 1,
  },
  {
    id: 19,
    name: 'Dawat Pure Café',
    photo: 'https://static3.soloartesanas.es/2749-large_default/pure-cafe.jpg',
    style: 'Imperial Stout',
    price: 3.0,
    valoration: 95,
    CompanyId: 7,
    CategoryId: 1,
  },
];

const companyData = [
  {
    name: 'Laugar',
    CIF: 'B95713780',
    address:
      'Barrio Zubiete (pol Industrial Isasi), 42 Gordexola 48192 Bizkaia',
  },
  {
    name: 'Sagra',
    CIF: 'B45846862',
    address:
      'Avenida de la Industria (pol. ind. Villa de Azaña), NAV 155 Numancia de la Sagra 45230  Toledo',
  },
  {
    name: 'Menduiña',
    CIF: 'B36587731',
    address: 'Carretera Aldan (darbo), 16 Cangas 36940  Pontevedra',
  },
  {
    name: 'Quana',
    CIF: 'B65685406',
    address: 'Calle via Augusta, 82 - PISO 1 Barcelona 08006  Barcelona',
  },
  {
    name: 'CASCALLARES',
    CIF: 'B87331641',
    address: 'AVENIDA DAS PONTES, S/N 27833 XERMADE Lugo',
  },
  {
    name: 'ARRIACA',
    CIF: 'B19297688',
    address:
      'Avda De La Industria 3 A - Nave 6  19210  - (Yunquera Dehenares) – Guadalajara',
  },
  {
    name: 'CERVEZAS CUENCA',
    CIF: 'A16300279',
    address: 'CALLE ARCAS (POL. INDUSTRIAL SEPES), PAR 40 16004 CUENCA',
  },
];

const dropDB = async (database) => {
  const sequelize = new Sequelize(database, DB_USER, DB_PASS, {
    dialect: 'mysql',
    host: DB_HOST,
  });
  try {
    await sequelize.query(`DROP DATABASE IF EXISTS ${database}`);
    console.log('BORRANDO BASE DE DATOS');
  } catch (error) {
    console.log('ERROR AL BORRAR LA BASE DE DATOS', error);
  }
};

const createDB = async (database) => {
  const sequelize = new Sequelize('', 'root', '', {
    dialect: 'mysql',
    logging: false,
    host: 'localhost',
  });

  await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
};

const insertCategory = async (name) => {
  try {
    const response = await Category.create({ name });
    console.log('Datos de "Category" insertados correctamente', response.toJSON().id);
  } catch (error) {
    console.log('Error al insertar datos', error);
  }
};

const insertProduct = async (beer) => {
  try {
    const response = await Product.create(beer);
    console.log('Datos de "Product" insertados correctamente', response.toJSON().id);
  } catch (error) {
    console.log('Error al insertar datos', error);
  }
};

const insertCompany = async (company) => {
  try {
    const response = await Company.create(company);
    console.log('Datos de "Company" insertados correctamente', response.toJSON().id);
  } catch (error) {
    console.log('Error al insertar datos', error);
  }
};

const init = async () => {
  try {
    await dropDB(DB_DB);
    await createDB(DB_DB);
    await Category.sync({ force: true });
    await Company.sync({ force: true });
    await Product.sync({ force: true });
  } catch (error) {
    console.log('Error al crear base de datos:', error.message);
  }

  try {
    console.log('Tablas creadas con éxito');
  } catch (error) {
    console.log('Error al crear las tablas:', error);
  }

  insertCategory('Cerveza');
  Promise.all(companyData.map(async (company) => await insertCompany(company)));
  Promise.all(beersData.map(async (beer) => await insertProduct(beer)));
  //process.exit(22);
};

init();

const express = require('express');
const app = express();
const db = require('./database/db');
const { Op } = require('sequelize');
const Product = require('./database/models/Product');
const routes = require('./routes/routes');

require('dotenv').config();
const DB_DB = process.env.DB_DB;
const DB_HOST = process.env.DB_HOST;

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ENDPOINTS
app.get('/', function (req, res) {
  res.json("Hello World, I'm an API Server!!!");
});

app.use('/', routes);

try {
  db.sync({ force: false });
  console.log(`DB Server running database "${DB_DB}" at "${DB_HOST}"`);
} catch (error) {
  console.log(`Error init DB Server: ${error}`);
}
try {
  app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
  });
} catch (error) {
  console.log(`Error init API Server: ${error}`);
}

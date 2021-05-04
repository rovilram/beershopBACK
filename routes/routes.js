const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers')

// MAIN VIEW ENDPOINT
router.get('/products/:category', (req, res) => {
  const { category } = req.params;

  controllers
    .selectProducts(category)
    .then((response) => {
      if (response.length === 0) {
        res.status(404).send({
          OK: 0,
          message: 'Category not found',
        });
      }
      res.send({
        OK: 1,
        response,
      });
    })
    .catch((error) =>
      res.status(500).send({
        OK: 0,
        message: `Database Error: ${error.message}`,
      }),
    );
});

// DETAIL VIEW ENDPOINT
router.get('/detail/:id', (req, res) => {
  const { id } = req.params;

  controllers
    .selectProductCompany(id)
    .then((response) => {
      if (response.length === 0) {
        res.status(404).send({
          OK: 0,
          message: 'ID not found',
        });
      }
      res.send({
        OK: 1,
        response,
      });
    })
    .catch((error) =>
      res.status(500).send({
        OK: 0,
        message: `Database Error: ${error.message}`,
      }),
    );
});

module.exports = router;

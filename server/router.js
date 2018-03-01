const express = require('express');

const router = express.Router();

const db = require('../database/index.js');

router.route('/:id/summary')
  .get((req, res) => {
    const { id } = req.params;

    if (id >= 0 && id <= 199) {
      db.find(id, (data) => {
        res.status(200);
        res.send(data);
      });
    } else {
      res.status(404);
      res.send('invalid id');
    }
  });

module.exports = router;

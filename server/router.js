const express = require('express');

const router = express.Router();

const db = require('../database/index.js');

router.route('/:id/summary')
  .get((req, res) => {
    const { id } = req.params;
    res.send(id);
  });

module.exports = router;

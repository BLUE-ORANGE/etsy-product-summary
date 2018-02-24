const express = require('express');

const router = express.Router();

const db = require('../database/index.js');

router.route('/:id/summary')
  .get((req, res) => {
    let id = req.params.id;
    res.send(id);
  });

module.exports = router;

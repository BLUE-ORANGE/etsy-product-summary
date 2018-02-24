const express = require('express');

const router = express.Router();
router.route('/:id/summary')
  .get((req, res) => {
    res.send('hi!');
  });

module.exports = router;

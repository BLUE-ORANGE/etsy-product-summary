const express = require('express');

const router = require('./router.js');

const db = require('../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../src/client'));

app.use('/v1/product', router);

const port = 3003;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


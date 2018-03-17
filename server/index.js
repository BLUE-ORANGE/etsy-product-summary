const express = require('express');

const router = require('./router.js');

const db = require('../database/index.js');

const bodyParser = require('body-parser');

const cors = require('cors');

const path = require('path');

require('dotenv').config();

const app = express();

app.use(bodyParser.text());

app.use(cors());

app.use(express.static(path.join(__dirname, '/../src/client')));

app.use('/v1/product', router);

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));


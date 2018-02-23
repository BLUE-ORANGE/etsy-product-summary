const db = require('../database/index.js')

const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/v1/productid/summary/', function(req, res) {
  res.send('getting!'); 
})

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

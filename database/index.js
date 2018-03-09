let Sequelize = require('sequelize');
require('dotenv').config();

let sqlz = new Sequelize(process.env.DB_HOST);

const Product = sqlz.define('product', {
    name: Sequelize.TEXT,
    description: Sequelize.TEXT,
    price: Sequelize["DOUBLE PRECISION"],
    itemCreation: Sequelize.TEXT,
    materials: Sequelize.TEXT,

  },{
    schema: 'public',
  })

  let find = (id, callback) => {
  Product.findAll({
    where: {
      id: id,
    },
  }).then(data => {
    callback(data);
  }).catch(err => {
    console.log(`err: ${err}`)
  })
};

  module.exports.find = find; 
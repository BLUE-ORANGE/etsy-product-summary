let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsypersonal', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const Product = sqlz.define('product', {
    name: Sequelize.TEXT,
    description: Sequelize.TEXT,
    price: Sequelize["DOUBLE PRECISION"],
    itemCreation: Sequelize.TEXT,
    Materials: Sequelize.TEXT,

  },{
    schema: 'public'
  })


  Product.sync({force: false}).then(() => {
      return Product.create({
          name: 'LOLDOG',
          description: 'black and white color',
          price: 5,
          itemCreation: 'Handmade',
          Materials: 'dog leather'
      })
  });

  module.exports; 
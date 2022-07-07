var connection;
var dbconfig = require('../config/db.config');
var mysql = require('mysql');

const Product = function (id, name, description, price, img) {
  this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.img = img
}

exports.getFeaturedProducts = function () {
  let featuredProducts = [];
  let sql = 'CALL listFeaturedProducts()';

  connectToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        results[0].forEach(element => {
          let product = new Product(element.id, element.nombre, element.descripcion, element.precio, element.imagen);

          featuredProducts.push(product);
        });

        resolve(featuredProducts);
      }
      connection.end();
    })
  });
}

exports.getProductsByCategory = function (category) {
  let products = [];
  let sql = `CALL listProductsByCategory(${JSON.stringify(category)})`;

  connectToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        results[0].forEach(element => {
          let product = new Product(element.id, element.nombre, element.descripcion, element.precio, element.imagen);

          products.push(product);
        })

        resolve(products);
      }
      connection.end();
    });
  });
}

exports.searchProducts = function (query) {
  let products = [];
  let sql = `CALL searchProducts("${query}")`;

  connectToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        results[0].forEach(element => {
          let product = new Product(element.id, element.nombre, element.descripcion,element.precio, element.imagen);

          products.push(product);
        })

        resolve(products);
      }    
      connection.end();
    });
  });
}

const connectToDatabase = () => {
  connection = mysql.createConnection(dbconfig);
}
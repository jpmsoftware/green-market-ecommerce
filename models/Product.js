var mysql = require('mysql');
var dbconfig = require('../config/db.config');
var connection;

const connectToDatabase = () => {
  connection = mysql.createConnection(dbconfig);
}

const Product = function (id, name, description, price, img) {
  this.id = id,
  this.name = name,
  this.description = description,
  this.price = price,
  this.img = img
}

exports.getFeaturedProducts = () => {
  let products = [];
  let query = 'CALL listFeaturedProducts()';

  connectToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        results[0].forEach(object => {
          let product = new Product(
            object.id, 
            object.nombre, 
            object.descripcion, 
            object.precio, 
            object.imagen);

          products.push(product);
        });

        resolve(products);
      }
      connection.end();
    })
  });
}

exports.getProductsByCategory = (category) => {
  let products = [];
  let query = `CALL listProductsByCategory(${JSON.stringify(category)})`;

  connectToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
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

exports.searchProducts = (id) => {
  let products = [];
  let query = `CALL searchProducts("${id}")`;

  connectToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
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
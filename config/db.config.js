require('dotenv').config();

config = {
  multipleStatements: true,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
};

module.exports = config;
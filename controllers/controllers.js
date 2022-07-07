var express = require('express');
var Product = require('../models/Product');

exports.renderHomePage = async (req, res) => {
  let featuredProducts = await Product.getFeaturedProducts();
  res.render('./pages/index', {featuredProducts});
}

exports.renderCartPage = (req, res) => {
  res.render('./pages/cart');
}

exports.renderSignUpPage = (req, res) => {
  res.render('./pages/signup');
}

exports.browseCategory = async (req, res) => {
  let products = await Product.getProductsByCategory(req.params.cat);
  res.render('./pages/category', {products});
}

exports.searchProducts = async (req, res) => {
  let query = req.query.search;
  let products = await Product.searchProducts(query);
  res.render('./pages/search', {products});
}
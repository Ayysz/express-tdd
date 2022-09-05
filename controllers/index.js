// import productController from './products.controller.cjs';
const productController = require('./products.controller');
const controllers = {};

controllers.product = productController;

module.exports = controllers;
// mengimpor controllerProduct di folder controllers
const controllers = require('../controllers');

module.exports = (app) => {
    app.get('/products', controllers.product.getProducts);
};
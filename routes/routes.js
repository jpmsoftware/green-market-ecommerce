var express = require('express');
var router = express.Router();
var controller = require('../controllers/controllers');

router.get('/', controller.renderHomePage);
router.get('/cart', controller.renderCartPage);
router.get('/category/:cat', controller.browseCategory);
router.get('/search', controller.searchProducts);
router.get('/signup', controller.renderSignUpPage);

// 404 page
router.use((req, res) => res.render('./pages/404'));

module.exports = router;
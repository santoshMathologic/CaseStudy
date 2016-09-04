var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var user   = require("./user.js");
var position   = require("./footballer.js");
var shipping = require("./shipping.js");


module.exports = router;


//Routes for users
router.get('/api/v1/users', user.getUsers);
router.post('/api/v1/users', user.createUser);

//Routes for position
router.get('/api/v1/positions', position.getPosition);
router.post('/api/v1/positions', position.createPosition);

//Routes for shipping
router.get('/api/v1/shipping', shipping.getShipping);
router.post('/api/v1/shipping', shipping.createShipping);
router.delete('/api/v1/shipping', shipping.deleteShipping);
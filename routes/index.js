var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var user   = require("user.js");


module.exports = router;


//Routes for trainstation
router.get('/api/v1/users', trainstation.getTrainStation);
router.post('/api/v1/users', trainstation.createTrainStation);
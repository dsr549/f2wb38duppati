var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('Horse', { title: 'Search Results horse' });

});

module.exports = router;
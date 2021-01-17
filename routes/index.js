var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hushpuppyhttp' });

});


/*GET arbitrary image */
module.exports = router;

var express = require('express');
var router = express.Router();


var configObj = require('../config.json');
var locationString = configObj.serverloc;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'hushpuppyhttp' });
  //res.send('hello world');
  
  res.sendFile(locationString + 'static/index.html');
});

/* GET home page. */
router.get('/catcat', function (req, res, next) {
  //res.render('index', { title: 'hushpuppyhttp' });
  //res.send(locationString);
  res.sendFile(locationString + 'public/images/catcat.jpg');
});

/*GET arbitrary image */
module.exports = router;

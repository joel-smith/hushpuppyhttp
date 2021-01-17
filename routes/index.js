var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hushpuppyhttp' });
  //res.send('hello world');
  res.sendFile(__dirname + 'static/index.html');
});


/*GET arbitrary image */
module.exports = router;

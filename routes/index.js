var express = require('express');
var router = express.Router();
const Photo = require('../photo.js');

var configObj = require('../config.json');
var locationString = configObj.serverloc;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'hushpuppyhttp' });
  //res.send('hello world');
  
  res.sendFile(locationString + 'static/index.html');
});

/* GET a requested image*/
router.get('/photoreq/:imgid/:imgext', function (req, res, next) {
  //res.render('index', { title: 'hushpuppyhttp' });
  //res.send(locationString);
  
  var tempPhoto= new Photo();

  //fill tempPhoto from mongo reference
  
  //replace these params with the ones from object
  const imgpath = 'public/photos/' + req.params.imgid + '.' + req.params.imgext;

  res.sendFile(locationString + imgpath);
});

/*GET arbitrary image */
module.exports = router;

var express = require('express');
var fs = require('fs');
var router = express.Router();
const Photo = require('../photo.js');
var configObj = require('../config.json');


//**MONGO DB STUFF */
const MongoClient = require('mongodb').MongoClient;

//const monk = require('monk');
//console.log(configObj.dbconnstr_pw);
const credentials = fs.readFileSync(configObj.dbcert);

const client = new MongoClient(configObj.dbconnstr, {
  sslKey: credentials,
  sslCert: credentials
});





var locationString = configObj.serverloc;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'hushpuppyhttp' });
  //res.send('hello world');
  
  res.sendFile(locationString + 'static/index.html');
});

/*DATABASE CHECK */

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

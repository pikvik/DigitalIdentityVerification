var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Identity Verfification' });
});

router.get('/passport-form',function(req,res,next){
  res.render('passport-form');
});

router.get('/government-form',function(req,res,next){
  res.render('government-form');
});

router.get('/view-passport-form',function(req,res,next){
  res.render('view-passport-form');
});


module.exports = router;

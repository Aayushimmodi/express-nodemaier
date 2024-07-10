var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form');
});
router.post('/process-form', function(req, res, next) {
  var name = req.body.name;
  var email =  req.body.email;
  var password =  req.body.password;
  res.send('response',{myname : name, myemail:email,mypassword:password})
});
module.exports = router;

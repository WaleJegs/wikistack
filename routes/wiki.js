const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/', function(req, res, next) {
    res.send('got to GET /wiki/');
  });
  
  router.post('/', function(req, res, next) {
    console.log('I got a post');
    res.send('got to POST /wiki/');
  });
  
  router.get('/add', function(req, res, next) {
    res.send('got to GET /wiki/add');
  });
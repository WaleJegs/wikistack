const express = require('express');
const router = express.Router();
module.exports = router;
const userRouter = require('./user');
const models = require('../models');
const Page = models.Page; 
const User = models.User;

router.use('/users', userRouter);

router.get('/', function(req, res, next) {
    res.send('got to GET /wiki/');
  });
  
router.get('/add', function(req, res, next) {
	res.render('addpage');
});


router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  page.save();
  // -> after save -> res.redirect('/');
  res.redirect('/')
});
const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const wikiRouter = require('./wiki.js');

router.post('/', function(req, res, next) {
	console.log(req.body);
	next();
})

router.use('/wiki', wikiRouter);

module.exports = router;
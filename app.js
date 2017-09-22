const models = require('./models')
const express = require('express');
const nunjucks = require('nunjucks')
const morgan = require('morgan')

const app = express();


models.User.sync({})
.then(function (){
    return models.Page.sync({})
})
.then(function() {
    app.listen(3000, function(){
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error)
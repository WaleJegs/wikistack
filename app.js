const models = require('./models')
const express = require('express');
const nunjucks = require('nunjucks')
const morgan = require('morgan')

const app = express();
const router = require('./routes');

app.use('/', router);

// models.User.sync({})
// .then(function (){
//     return models.Page.sync({})
// })
// .then(function() {
//     app.listen(3010, function(){
//         console.log('Server is listening on port 3000!');
//     });
// })
// .catch(console.error)

// make sure you are exporting your db from your models file



models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3010, function () {
        console.log('Server is listening on port 3010!');
    });
})
.catch(console.error);

// this drops all tables then recreates them based on our JS definitions
models.db.sync({force: true})
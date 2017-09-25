const models = require('./models')
const express = require('express');
const nunjucks = require('nunjucks')
const morgan = require('morgan')

const app = express();
const router = require('./routes');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

nunjucks.configure('views');

models.db.sync({})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3103, function () {
        console.log('Server is listening on port 3001!');
    });
})
.catch(console.error);

// this drops all tables then recreates them based on our JS definitions
models.db.sync({force: true})
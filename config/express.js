var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport = require('passport');
var path = require('path');
module.exports = function(){

    var app = express();
    app.use(morgan('dev'));

    app.use(session({
        secret: 'secret_key',
        resave: false,
        saveUninitialized: true
    }))
    app.use(bodyParser.urlencoded({
                extended:true
            }))

    app.use(bodyParser.json());
    app.use(passport.initialize());
    app.use(passport.session());

    app.set('views',['./app/views','./public','./public/views/pages']);
    app.set('view engine','pug');

    require('../app/routes/index.routes')(app); //Routes navigate to index or home page
    require('../app/routes/user.routes')(app); //Routes related to users i.e registration, login
    require('../app/routes/feedback.routes')(app);
    require('../app/routes/partial.routes')(app);

    //app.use(express.static('./public'))
    app.use(express.static(path.join(__dirname, "/../public")));
    return app;
}

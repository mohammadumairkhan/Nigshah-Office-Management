var express  	= require('express');
var mongoose 	= require('mongoose');
var env 		= process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var config 		= require('./server/config/config')[env];
var app 		= express();
//setup express
require('./server/config/express')(app, config);
//setup mongoose
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);
//setup passport


app.listen(config.port);
console.log("NOM started listening at port: " + config.port + "...");
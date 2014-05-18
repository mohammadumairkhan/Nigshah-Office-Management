var express 		= require('express');
var morgan			= require('morgan');
var bodyParser		= require('body-parser');
var cookieParser	= require('cookie-parser');
var session			= require('express-session');
var passport		= require('passport');

module.exports = function(app, config){
	app.set('views', config.rootPath + '/client');
	app.use(morgan('dev'));
	app.use(cookieParser());
	app.use(bodyParser());
	app.use(session({secret:'nig$hah'}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(express.static(config.rootPath + '/client'));
};

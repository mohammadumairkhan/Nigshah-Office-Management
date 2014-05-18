var express 		= require('express');
var router 			= express.Router();
var accountsManager	= require('../managers/accounts');

module.exports = function(app){

	router.get('/', function(req, res){
		accountsManager.GetAllAccounts().exec(function(err, accounts){
			return res.send(accounts);
		});
	});

	app.use('/api/accounts', router);
};
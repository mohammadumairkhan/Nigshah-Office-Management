var express 		= require('express');
var router 			= express.Router();
var accountsManager	= require('../managers/accounts');

module.exports = function(app){

	router.get('/', function(req, res){
		accountsManager.GetAllAccounts().exec(function(err, accounts){
			var AccountsList = {
				Accounts: accounts
			}
			return res.send(AccountsList);
		});
	});

	router.get('/:id', function(req, res){
		accountsManager.GetAccountByAccountNumber(req.params.id).exec(function(err, account){
			return res.send(account[0]);
		});
	})

	router.get('/:id/transactions', function(req, res){
		accountsManager.GetAllTrasactionsForAccount(req.params.id).exec(function(err, transactions){
			var TransactionsList = {
				Transactions: transactions[0].transactions
			}
			return res.send(TransactionsList);
		});
	});

	router.get('/:id/transactions/:tid', function(req, res){
		accountsManager.GetTrasactionByTrasactionId(req.params.id, req.params.tid).exec(function(err, transaction){
			return res.send(transaction);
		});
	});

	router.post('/:id/transactions', function(req, res){
		accountsManager.PostTrasactionForAccount(req.params.id, req.body).exec(function(err, transaction){
			if(err)
				console.log(err);
			else{
				res.status(200)
				return res.send();
			}
		});
	});

	app.use('/api/accounts', router);
};
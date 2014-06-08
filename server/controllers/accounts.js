var express 		= require('express');
var router 			= express.Router();
var accountsManager	= require('../managers/accounts');

module.exports = function (app) {

    router.get('/', GetAllAccounts);

    router.get('/:id', GetAccountByAccountNumber);

    router.get('/:id/transactions', GetAllTransactions);

	router.get('/:id/transactions/:tid', GetTransactionByTransactionId);

	router.post('/:id/transactions', GetAccountInfo, PostTransactionForAccount);

	router.delete('/:id/transactions/:tid', GetAccountInfo, DeleteTransactionById);
    
	function GetAllAccounts (req, res) {
	    accountsManager.GetAllAccounts().exec(function(err, accounts){
	        var AccountsList = {
	            Accounts: accounts
	        }
	        return res.send(AccountsList);
	    });
	}

	function GetAccountByAccountNumber(req, res){
	    accountsManager.GetAccountByAccountNumber(req.params.id).exec(function(err, account){
	        return res.send(account);
	    });
	}

	function GetAllTransactions(req, res){
	    accountsManager.GetAllTrasactionsForAccount(req.params.id).exec(function(err, account){
	        var TransactionsList = {
	            Transactions: account.transactions
	        }
	        return res.send(TransactionsList);
	    });
	}

	function GetTransactionByTransactionId(req, res){
	    accountsManager.GetTransactionByTransactionId(req.params.id, req.params.tid).exec(function (err, transaction) {
	        return res.send(transaction);
	    });
	}

	function PostTransactionForAccount(req, res) {
	    var accountInfo = req.accountInfo;
	    var transaction = req.body.transaction;
	    transaction.tid = accountsManager.CreateNewTransactionId();
	    accountsManager.PostTransactionForAccount(accountInfo, transaction).exec(function (err, updatedTransaction) {
	        if(err)
	            console.log(err);
	        else {
	            res.status(200)
	            return res.send(transaction);
	        }
	    });
	}

	function DeleteTransactionById(req, res) {
	    var accountNumber = req.params.id;
	    var tid = req.params.tid;
	    accountsManager.GetTransactionByTransactionId(accountNumber, tid).exec(function (err, accountTransaction) {
	        if (err) {
	            res.status(404);
	            res.send(err);
	        }
	        else {
	            var transaction = accountTransaction.transactions[0];
	            var reverseTransactionParams = {
	                type: transaction.type == 'credit'? 'debit' : 'credit',
	                amount: transaction.amount,
	                balanceAmount: req.accountInfo.balanceAmount
	            }
	            console.log(reverseTransactionParams);
	            accountsManager.DeleteTransactionById(accountNumber, tid, reverseTransactionParams).exec(function (err, deletedTransaction) {
	                if (err) {
	                    res.status(400)
	                    res.send("Cannot delete");
	                } else {
	                    res.send({ accountNumber: accountNumber, tid: tid });
	                }
	            })
	        }
	    })
	}

	function GetAccountInfo(req, res, next) {
	    accountsManager.GetAccountByAccountNumber(req.params.id).exec(function (err, account) {
	        if (err) {
                console.log(err)
	            res.status(404);
	            res.send();
	        } else {
	            req.accountInfo = account;
	            next();
	        }

	    })
	}


	app.use('/api/accounts', router);
};
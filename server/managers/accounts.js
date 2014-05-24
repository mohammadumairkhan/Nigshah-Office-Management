var mongoose 	= require('mongoose');
var accounts 	= mongoose.model('Accounts');

exports.GetAllAccounts = function(){
	return accounts.find({},{_id: 0, transactions: 0});
}

exports.GetAccountByAccountNumber = function(accountNumber){
	return accounts.find({accountNumber: accountNumber}, {_id: 0, transactions: 0});
}

exports.GetAllTrasactionsForAccount = function(accountNumber){
	return accounts.find({accountNumber: accountNumber}, {_id: 0, transactions: 1});
}

exports.GetTrasactionByTrasactionId = function(accountNumber, tId){
	return accounts.find({accountNumber: accountNumber, transactions:{tid: tId}});
}

exports.PostTrasactionForAccount = function(accountNumber, transaction){
	transaction.tid =  mongoose.Types.ObjectId();
	return accounts.update({accountNumber: accountNumber},{$push:{transactions: transaction}}, {upsert: false});
}
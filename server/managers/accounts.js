var mongoose 	= require('mongoose');
var accounts 	= mongoose.model('Accounts');

exports.GetAllAccounts = function () {
	return accounts.find({},{_id: 0, transactions: 0});
}

exports.GetAccountByAccountNumber = function(accountNumber){
	return accounts.findOne({accountNumber: accountNumber}, {_id: 0, transactions: 0});
}

exports.GetAllTrasactionsForAccount = function(accountNumber){
	return accounts.findOne({accountNumber: accountNumber}, {_id: 0, transactions: 1});
}

exports.GetTrasactionByTrasactionId = function(accountNumber, tId){
	return accounts.find({accountNumber: accountNumber, transactions:{tid: tId}});
}

exports.PostTransactionForAccount = function (accountInfo, transaction) {
    var accountNumber = accountInfo.accountNumber;
    var newBalanceAmount = GetNewBalanceAmount(transaction.type, transaction.amount, accountInfo.balanceAmount);
    return accounts.update({accountNumber: accountNumber},{$set:{balanceAmount: newBalanceAmount},$push:{transactions: transaction}}, {upsert: false});
}

exports.CreateNewTransactionId = function () {
    return mongoose.Types.ObjectId();
}

function GetNewBalanceAmount(transactionType, transactionAmount, balanceAmount) {
    var newBalanceAmount = 0;
    switch(transactionType){
        case "credit":
            newBalanceAmount = balanceAmount - transactionAmount;
            break;
        case "debit":
            newBalanceAmount = balanceAmount + transactionAmount;
            break;
    } 
    return newBalanceAmount;
}
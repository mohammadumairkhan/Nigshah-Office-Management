var accounts 	= require('mongoose').model('Accounts');

exports.GetAllAccounts = function(){
	return accounts.find({});
}
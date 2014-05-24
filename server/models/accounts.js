var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.initAccountsModel = function(){

	var transactionsSchema = mongoose.Schema({	
		tid: 			{type: Schema.Types.ObjectId, unique: true, required: '{PATH} is required'},//transaction id
		date: 			{type: Date, required: '{PATH} is required'},								//date of transaction
		beneficiary: 	{type: String, required: '{PATH} is required'},								 
		mode: 			{type: String, required: '{PATH} is required'},								//debit or credit
		reference: 		{type: String},																//cheque # ATM #
		type: 			{type: String, required: '{PATH} is required'},								//cheque/cash
		amount: 		{type: Number, required: '{PATH} is required'}								
	})

	var accountsSchema = mongoose.Schema({
		accountNumber: 	{type: String, unique: true, required: '{PATH} is required'},
		accountTitle: 	{type: String, required: '{PATH} is required'},
		bankTitle: 		{type: String, required: '{PATH} is required'},
		balanceAmount: 	{type: Number, required: '{PATH} is required'},
		transactions: 	[]
	});

	mongoose.model('Accounts', accountsSchema);
}


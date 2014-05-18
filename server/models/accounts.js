var mongoose = require('mongoose');

exports.initAccountsModel = function(){
	var accountsSchema = mongoose.Schema({
		accountNumber: {type: String, unique: true, required: '{PATH} is required'},
		accountTitle: {type: String, required: '{PATH} is required'},
		bankTitle: {type: String, required: '{PATH} is required'}
	});

	mongoose.model('Accounts', accountsSchema);
}


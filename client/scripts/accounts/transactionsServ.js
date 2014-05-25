'use strict'

angular.module('NigshahOM').factory('transactionsServ', ['$resource', function ($resource) {
	
	var methods = { getAll: {method: 'GET'}, put: {method: 'PUT'}};
	var TransactionsResource = $resource('/api/accounts/:id/transactions', { id: '@id' }, methods);
	var transactionTypes = [
        {
            name:   'Credit',
            value:  'credit'
        },
        {
            name: 'Debit',
            value: 'debit'
        }
	]

	var transactionModes = [
        {
            name:  'Cash',
            value: 'cash'
        },
        {
            name: 'Cheque',
            value: 'cheque'
        },
        {
            name: 'Online',
            value: 'online'
        }
	]

	return {
		GetAllTransactionsForAccount: function(accountId){
			return TransactionsResource.getAll({id: accountId});
		},
		PostTransactionForAccount: function (accountId, addedtransaction) {
		    return TransactionsResource.save({ id: accountId }, { transaction: addedtransaction }).$promise;
		},
		GetTransactionTypes: function () {
		    return transactionTypes;
		},
		GetTransactionModes: function () {
		    return transactionModes;
		}
	};
}])
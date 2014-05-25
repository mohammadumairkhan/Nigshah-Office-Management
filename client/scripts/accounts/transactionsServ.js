'use strict'

angular.module('NigshahOM').factory('transactionsServ', ['$resource', function ($resource) {
	
	var methods = { getAll: {method: 'GET'}, put: {method: 'PUT'}};
	var TransactionsResource = $resource('/api/accounts/:id/transactions', { id: '@id' }, methods);

	return {
		GetAllTransactionsForAccount: function(accountId){
			return TransactionsResource.getAll({id: accountId});
		},
		PostTransactionForAccount: function (accountId, addedtransaction) {
		    return TransactionsResource.save({ id: accountId }, { transaction: addedtransaction }).$promise;
		}
	};
}])
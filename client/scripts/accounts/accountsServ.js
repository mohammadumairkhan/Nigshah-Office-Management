'user strict'

angular.module('NigshahOM').factory('accountsServ', ['$resource', function ($resource) {

    var methods = { getAll: {method: 'GET'}, put: {method: 'PUT'}};
    var AccountsResource = $resource('/api/accounts/:id', { id: '@id' }, methods);

	return {
		GetAllAccounts: function(){
		    return AccountsResource.getAll();
		},
		GetAccountById: function(accountId){
			return AccountsResource.get({id: accountId})
		}
	};
}])

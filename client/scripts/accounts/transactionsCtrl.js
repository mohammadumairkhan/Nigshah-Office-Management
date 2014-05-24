'use strict'

angular.module('NigshahOM').controller('transactionsCtrl', ['$scope','$stateParams','transactionsServ', function ($scope, $stateParams, transactionsServ) {
	var accountNumber = $stateParams.accountNumber;
	$scope.allTransactions = transactionsServ.GetAllTransactionsForAccount(accountNumber);
}]);
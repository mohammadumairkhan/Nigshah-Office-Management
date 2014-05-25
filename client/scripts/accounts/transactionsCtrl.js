'use strict'

angular.module('NigshahOM').controller('transactionsCtrl', ['$scope','$stateParams','transactionsServ', function ($scope, $stateParams, transactionsServ) {
	var accountNumber = $stateParams.accountNumber;
	$scope.allTransactions = transactionsServ.GetAllTransactionsForAccount(accountNumber);
	$scope.transactionTypes = transactionsServ.GetTransactionTypes();
	$scope.transactionModes = transactionsServ.GetTransactionModes();
	$scope.addNewTransaction = function (transaction) {
	    transactionsServ.PostTransactionForAccount(accountNumber, transaction).then(function (newTransaction) {
	        $scope.allTransactions.Transactions.push(newTransaction);
	    }, function (res) {

	    });
	}
}]);
'use strict'

angular.module('NigshahOM').controller('transactionsCtrl', ['$scope', 'Transactions', 'transactionsServ', function ($scope, Transactions, transactionsServ) {
    
    $scope.allTransactions = Transactions;
	$scope.transactionTypes = transactionsServ.GetTransactionTypes();
	$scope.transactionModes = transactionsServ.GetTransactionModes();
	$scope.addNewTransaction = function (transaction) {
	    transactionsServ.PostTransactionForAccount(transaction).then(function (newTransaction) {
	        $scope.allTransactions.Transactions.push(newTransaction);
	    }, function (res) {

	    });
	}
}]);
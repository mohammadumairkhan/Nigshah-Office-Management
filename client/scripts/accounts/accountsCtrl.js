'use strict'

angular.module('NigshahOM').controller('accountsCtrl', ['$scope', 'accountsServ', function ($scope, accountsServ) {
    
    $scope.allAccountsData = accountsServ.GetAllAccounts();

    $scope.getTransactionsForAccount = function(accountNumber){
    	$scope.allTransactions = accountsServ.GetAllTransactionsForAccount(accountNumber);
    }
    
	$scope.showAddTransactionModal = function(){
		
	}
}]);
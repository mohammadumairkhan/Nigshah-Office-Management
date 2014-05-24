'use strict'

angular.module('NigshahOM').controller('accountsCtrl', ['$scope', 'accountsServ', function ($scope, accountsServ) {
    
    $scope.allAccounts = accountsServ.GetAllAccounts();
    
	$scope.showAddTransactionModal = function(){
		
	}
}]);
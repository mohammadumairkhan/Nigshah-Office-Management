'use strict'

angular.module('NigshahOM').controller('summaryCtrl', ['$scope', 'summaryServ', function ($scope, summaryServ) {
    
    $scope.allAccounts = summaryServ.GetAllAccounts();
    
	$scope.showAddTransactionModal = function(){
		
	}
}]);
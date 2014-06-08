'use strict'

angular.module('NigshahOM').controller('summaryCtrl', ['$scope', 'summaryServ','Accounts', function ($scope, summaryServ, Accounts) {
    $scope.allAccounts = Accounts;
}]);
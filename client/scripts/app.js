var app = angular.module('NigshahOM', ['ui.router', 'ngResource', 'ui.bootstrap', 'restangular']);

app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    var template = '<div ng-include="' + "'views/navbar.html'" + '"></div><div ui-view></div>';

    var AccountsResolve = function (summaryServ) {
        return summaryServ.GetAllAccounts().then(function (res) {
            return res.Accounts;
        }, function () {
            //TODO:: route reject 
        })
    };

    var TransactionsResolve = function (transactionsServ, $stateParams) {
        transactionsServ.SetAccountId($stateParams.accountNumber);
        return transactionsServ.GetAllTransactionsForAccount().then(function (res) {
            return res.Transactions;
        }, function () {
            //TODO:: route reject
        })
    }

    $stateProvider
		.state('About',{
			url:'/about',
			templateUrl:'views/about.html'
		})
		.state('Dashboard',{
			url:'/dashboard',
			templateUrl: 'views/dashboard/dashboard.html',
			controller:'dashboardCtrl'
		})
		.state('Accounts',{
			url:'/accounts',
			template: template,
            abstract: true
		})
		.state('Accounts.Summary',{
			url:'/summary',
			templateUrl: 'views/accounts/summary.html',
			controller: 'summaryCtrl',
			resolve: {
			    Accounts: AccountsResolve
			}
		})
		.state('Accounts.Transactions',{
			url:'/transactions/:accountNumber',
			templateUrl:'views/accounts/transactions.html',
			controller: 'transactionsCtrl',
			resolve: {
			    Transactions: TransactionsResolve
			}
		})   

    RestangularProvider.setBaseUrl('/api');
}]);
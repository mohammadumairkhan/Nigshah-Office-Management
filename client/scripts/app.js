var app = angular.module('NigshahOM', ['ui.router', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/dashboard');

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
			templateUrl:'views/accounts/accounts.html',
			controller: 'accountsCtrl'
		})
		.state('Transactions',{
			url:'/transactions/:accountNumber',
			templateUrl:'views/accounts/transactions.html',
			controller: 'transactionsCtrl'
		})
}]);
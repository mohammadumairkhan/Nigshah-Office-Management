var app = angular.module('NigshahOM', ['ui.router', 'ngResource', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    var template = '<div ng-include="' + "'views/navbar.html'" + '"></div><div ui-view></div>';
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
			controller: 'summaryCtrl'
		})
		.state('Accounts.Transactions',{
			url:'/transactions/:accountNumber',
			templateUrl:'views/accounts/transactions.html',
			controller: 'transactionsCtrl'
		})
}]);
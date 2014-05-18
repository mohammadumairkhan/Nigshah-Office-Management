var app = angular.module('NigshahOM', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/about');

	$stateProvider
		.state('About',{
			url:'/about',
			templateUrl:'views/about.html'
		})
		.state('Accounts',{
			url:'/accounts',
			templateUrl:'views/accounts/accounts.html',
			controller: 'accountsCtrl',
			resolve:{
				AccountDetail: function($http){
					return $http.get('/api/accounts').then(function(res){
						return res.data;
					})
				}
			}
		})
}]);
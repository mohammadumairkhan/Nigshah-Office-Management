'user strict'

angular.module('NigshahOM').factory('summaryServ', ['Restangular', function (Restangular) {

    var Accounts = Restangular.all('accounts');

    return {
        GetAllAccounts: GetAllAccoutns,
        GetAccountById: GetAccountById
    };

    function GetAllAccoutns() {
        return Accounts.customGET();
    }

    function GetAccountById(accountId) {
        return Accounts.one('id', accountId).get();
    }
}])

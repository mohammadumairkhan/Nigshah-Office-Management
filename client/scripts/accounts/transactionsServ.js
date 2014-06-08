'use strict'

angular.module('NigshahOM').factory('transactionsServ', ['Restangular', function (Restangular) {

    return {
	    GetAllTransactionsForAccount: GetAllTransactionsForAccount,
	    PostTransactionForAccount: PostTransactionForAccount,
	    DeleteTransactionFromAccount: DeleteTransactionFromAccount,
	    GetTransactionTypes : GetTransactionTypes,
        GetTransactionModes: GetTransactionModes,
        SetAccountId : SetAccountId
    };

    var Transaction;

    function GetAllTransactionsForAccount() {
	    return Transaction.customGET();
	}

    function PostTransactionForAccount(addedtransaction) {
        var newTransactionObj = { transaction: addedtransaction };
        return Transaction.post(newTransactionObj);
	    //return TransactionsResource.save({ id: accountId }, ).$promise;
	}

	function GetTransactionTypes() {
	    return [
            {
                name: 'Credit',
                value: 'credit'
            },
            {
                name: 'Debit',
                value: 'debit'
            }
	    ];
	}

	function GetTransactionModes() {
	    return [
            {
                name: 'Cash',
                value: 'cash'
            },
            {
                name: 'Cheque',
                value: 'cheque'
            },
            {
                name: 'Online',
                value: 'online'
            }
	    ];
	}

	function SetAccountId (accountId){
	    Transaction = Restangular.one('accounts', accountId).all('transactions');
	}

	function DeleteTransactionFromAccount(tid) {
	    return Transaction.one(tid).remove();
	}
}])
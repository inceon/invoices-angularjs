;(function () {
    'use strict';

    angular.module('app')
        .controller('AllCustomerController', AllCustomerController);

    AllCustomerController.$inject = ['customersData'];

    function AllCustomerController(customersData) {
        var vm = this;

        vm.customers = customersData;

    }
})();
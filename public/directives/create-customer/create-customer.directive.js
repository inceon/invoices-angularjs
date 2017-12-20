;(function () {
    'use strict';

    angular
        .module('directive.create-customer', [])
        .directive('createCustomer', function ( ) {
            return {
                restrict: 'E',
                templateUrl: 'directives/create-customer/create-customer.html',
                scope: {
                    flag: '=',
                    customers: '='
                },
                controller: CreateCustomerCtrl,
                controllerAs: 'vm',
                bindToController: true

            };
        });

    CreateCustomerCtrl.$inject = ['customers'];

    function CreateCustomerCtrl(customers) {

        var vm = this;

        vm.saveCustomer = saveCustomer;

        vm.data = {
            name: undefined,
            address: undefined,
            phone: undefined
        };
        vm.currentCustomer = undefined;

        /**
         * Saving customer data to server
         */
        function saveCustomer() {

            vm.currentCustomer = new customers(vm.data);
            vm.currentCustomer.$save();

            vm.customers.push(vm.currentCustomer);

            vm.flag = false;

        }

    }

})();

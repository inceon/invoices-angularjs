;(function () {
    'use strict';

    angular.module('app')
        .controller('EditCustomerController', EditCustomerController);

    EditCustomerController.$inject = ['$timeout', 'customerData'];

    function EditCustomerController($timeout, customerData) {
        var vm = this;

        vm.currentCustomer = customerData;
        vm.isSaved = false;
        vm.isCreated = false;

        vm.data = vm.currentCustomer;

        vm.saveCustomer = saveCustomer;

        /**
         * Saving customer data to server
         */
        function saveCustomer() {
            vm.isSaved = false;

            angular.extend(vm.currentCustomer, vm.data);
            vm.currentCustomer.$update();

            vm.isCreated = true;
            $timeout(function () {
                vm.isSaved = true;
            }, 400);
        }
    }
})();
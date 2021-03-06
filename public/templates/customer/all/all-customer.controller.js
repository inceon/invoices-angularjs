;(function () {
    'use strict';

    angular.module('app')
        .controller('AllCustomerController', AllCustomerController);

    AllCustomerController.$inject = ['customersData'];

    function AllCustomerController(customersData) {
        var vm = this;

        vm.customers = customersData;

        vm.deleteCustomer = deleteCustomer;

        /**
         * Deleting customer
         * @param customer - customer object
         * @param index - index customer in vm.customers array
         */
        function deleteCustomer(customer, index) {
            if(confirm("Are you really want to delete this customer?")) {
                customer.$delete();
                vm.customers.splice(index, 1);
            }
        }

    }
})();
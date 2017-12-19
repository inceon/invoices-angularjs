;(function () {
    'use strict';

    angular.module('app')
        .controller('AllInvoiceController', AllInvoiceController);

    AllInvoiceController.$inject = ['invoicesData'];

    function AllInvoiceController(invoicesData) {
        var vm = this;

        vm.invoices = invoicesData;

    }
})();
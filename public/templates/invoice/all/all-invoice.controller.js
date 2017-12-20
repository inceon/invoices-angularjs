;(function () {
    'use strict';

    angular.module('app')
        .controller('AllInvoiceController', AllInvoiceController);

    AllInvoiceController.$inject = ['invoicesData'];

    function AllInvoiceController(invoicesData) {
        var vm = this;

        vm.invoices = invoicesData;

        vm.deleteInvoice = deleteInvoice;

        function deleteInvoice(invoice, index) {
            if(confirm("Are you really want to delete this invoice?")) {
                invoice.$delete();
                vm.invoices.splice(index, 1);
            }
        }

    }
})();
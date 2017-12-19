;(function () {
    'use strict';

    angular.module('app')
        .controller('NewInvoiceController', NewInvoiceController);


    NewInvoiceController.$inject = ['productsData'];

    function NewInvoiceController(productsData) {
        var vm = this;

        vm.products = productsData;

    }
})();
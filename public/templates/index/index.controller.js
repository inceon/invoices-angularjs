;(function () {
    'use strict';

    angular.module('app')
        .controller('IndexController', IndexController);


    IndexController.$inject = ['invoicesData'];

    function IndexController(invoicesData) {
        var vm = this;

        vm.invoices = invoicesData;

    }
})();
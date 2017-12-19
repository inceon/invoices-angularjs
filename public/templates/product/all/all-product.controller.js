;(function () {
    'use strict';

    angular.module('app')
        .controller('AllProductController', AllProductController);

    AllProductController.$inject = ['productsData'];

    function AllProductController(productsData) {
        var vm = this;

        vm.products = productsData;

    }
})();
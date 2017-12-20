;(function () {
    'use strict';

    angular.module('app')
        .controller('EditProductController', EditProductController);

    EditProductController.$inject = ['$timeout', 'productData'];

    function EditProductController($timeout, productData) {
        var vm = this;

        vm.currentProduct = productData;
        vm.isSaved = false;
        vm.isCreated = false;

        vm.data = vm.currentProduct;

        vm.saveProduct = saveProduct;

        /**
         * Saving product data to server
         */
        function saveProduct() {
            vm.isSaved = false;

            angular.extend(vm.currentProduct, vm.data);
            vm.currentProduct.$update();

            vm.isCreated = true;
            $timeout(function () {
                vm.isSaved = true;
            }, 400);
        }
    }
})();
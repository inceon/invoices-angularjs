;(function () {
    'use strict';

    angular.module('app')
        .controller('AllProductController', AllProductController);

    AllProductController.$inject = ['productsData'];

    function AllProductController(productsData) {
        var vm = this;

        vm.products = productsData;
        vm.deleteProduct = deleteProduct;

        /**
         * Deleting product
         * @param product - product object
         * @param index - index product in vm.products array
         */
        function deleteProduct(product, index) {
            if(confirm("Are you really want to delete this product?")) {
                product.$delete();
                vm.products.splice(index, 1);
            }
        }

    }
})();
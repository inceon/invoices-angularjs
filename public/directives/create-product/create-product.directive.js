;(function () {
    'use strict';

    angular
        .module('directive.create-product', [])
        .directive('createProduct', function ( ) {
            return {
                restrict: 'E',
                templateUrl: 'directives/create-product/create-product.html',
                scope: {
                    flag: '=',
                    products: '='
                },
                controller: CreateProductCtrl,
                controllerAs: 'vm',
                bindToController: true

            };
        });

    CreateProductCtrl.$inject = ['products'];

    function CreateProductCtrl(products) {

        var vm = this;

        vm.saveProduct = saveProduct;

        vm.data = {
            name: undefined,
            price: 0
        };
        vm.currentProduct = undefined;

        /**
         * Saving product data to server
         */
        function saveProduct() {

            vm.currentProduct = new products(vm.data);
            vm.currentProduct.$save();

            vm.products.push(vm.currentProduct);

            vm.flag = false;

        }

    }

})();

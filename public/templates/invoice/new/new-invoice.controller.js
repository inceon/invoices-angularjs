;(function () {
    'use strict';

    angular.module('app')
        .controller('NewInvoiceController', NewInvoiceController);


    NewInvoiceController.$inject = ['customersData', 'productsData'];

    function NewInvoiceController(customersData, productsData) {
        var vm = this;

        vm.products = productsData;
        vm.customers = customersData;
        vm.data = {
            customer_id: null,
            products: [],
            discount: 0
        };
        
        vm.addProduct = addProduct;
        vm.changeProductCount = changeProductCount;
        vm.deleteProduct = deleteProduct;
        vm.totalPrice = totalPrice;

        function addProduct(productItem) {
            if (productItem && !productItem.selected) {
                vm.data.products.push({
                    item: productItem,
                    count: 1
                });

                productItem.selected = true;
            }
        }

        function changeProductCount(product, col) {
            product.count += col;

            product.count = Math.max(product.count, 1);
        }

        function deleteProduct(product, index) {
            product.item.selected = false;
            vm.data.products.splice(index, 1);
        }

        function totalPrice() {
            var total = 0;
            if (vm.data.products.length) {
                total += vm.data.products.reduce(function (accumulator, product) {
                    return (accumulator + (product.item.price * product.count));
                }, 0);
            }
            if (vm.data.discount) {
                total = total - (total * vm.data.discount / 100);
            }
            return total.toFixed(2);
        }

    }
})();
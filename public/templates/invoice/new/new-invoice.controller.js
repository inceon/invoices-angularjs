;(function () {
    'use strict';

    angular.module('app')
        .controller('NewInvoiceController', NewInvoiceController);


    NewInvoiceController.$inject = ['$stateParams', 'invoices', 'invoiceItems', 'customersData', 'productsData'];

    function NewInvoiceController($stateParams, invoices, invoiceItems, customersData, productsData) {
        var vm = this;

        vm.products = productsData;
        vm.customers = customersData;
        vm.currentInvoice = undefined;

        vm.data = {
            customer_id: undefined,
            products: [],
            discount: 0
        };

        if ($stateParams.id) {
            invoices.get($stateParams, function(invoice){
                vm.currentInvoice = invoice;
                angular.extend(vm.data, invoice);
            });
            vm.data.products = invoiceItems.query({
                invoice_id: $stateParams.id
            });

        }

        vm.addProduct = addProduct;
        vm.changeProductCount = changeProductCount;
        vm.deleteProduct = deleteProduct;
        vm.totalPrice = totalPrice;
        vm.saveInvoice = saveInvoice;

        function addProduct(productItem) {
            if (productItem && !productItem.selected) {
                vm.data.products.push({
                    item: productItem,
                    count: 1
                });

                productItem.selected = true;
                saveInvoice();
            }
        }

        function changeProductCount(product, col) {
            product.count += col;
            product.count = Math.max(product.count, 1);

            // invoiceItems

            saveInvoice();
        }

        function deleteProduct(product, index) {
            product.item.selected = false;
            vm.data.products.splice(index, 1);

            saveInvoice();
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

        function saveInvoice() {
            if (vm.currentInvoice) {
                vm.currentInvoice.customer_id = vm.data.customer_id;
                vm.currentInvoice.discount = vm.data.discount;
                vm.currentInvoice.total = totalPrice();

                vm.currentInvoice.$update();
            } else {
                vm.currentInvoice = new invoices(vm.data);
                vm.currentInvoice.$save();
            }
        }

    }
})();
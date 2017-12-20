;(function () {
    'use strict';

    angular.module('app')
        .controller('NewInvoiceController', NewInvoiceController);


    NewInvoiceController.$inject = ['$stateParams', '$timeout', 'invoices', 'products', 'invoiceItems', 'customersData', 'productsData'];

    function NewInvoiceController($stateParams, $timeout, invoices, products, invoiceItems, customersData, productsData) {
        var vm = this;

        vm.products = productsData;
        vm.customers = customersData;
        vm.currentInvoice = undefined;
        vm.isSaved = false;
        vm.isCreated = false;

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

            var tempItems = invoiceItems.query({
                invoice_id: $stateParams.id
            }, function () {
                tempItems.forEach(function (el) {
                    products.get({
                        id: el.product_id
                    }, function (product) {
                        vm.data.products.push({
                            quantity: el.quantity,
                            item: product,
                            entry: el
                        });
                    })
                })
            });
        }

        vm.addProduct = addProduct;
        vm.changeProductQuantity = changeProductQuantity;
        vm.deleteProduct = deleteProduct;
        vm.totalPrice = totalPrice;
        vm.saveInvoice = saveInvoice;

        function addProduct(productItem) {
            if (productItem && !productItem.selected) {
                var entry = new invoiceItems({
                    invoice_id: vm.currentInvoice.id * 1,
                    product_id: productItem.id,
                    quantity: 1
                });
                entry.$save();
                vm.data.products.push({
                    item: productItem,
                    entry: entry,
                    quantity: 1
                });

                productItem.selected = true;
                saveInvoice();
            }
        }

        function changeProductQuantity(product, col) {
            product.quantity += col;
            product.quantity = Math.max(product.quantity, 1);

            product.entry.quantity = product.quantity;
            product.entry.$update();

            saveInvoice();
        }

        function deleteProduct(product, index) {
            product.item.selected = false;
            product.entry.$delete();
            vm.data.products.splice(index, 1);

            saveInvoice();
        }

        function totalPrice() {
            var total = 0;
            if (vm.data.products.length) {
                total += vm.data.products.reduce(function (accumulator, product) {
                    return (accumulator + (product.item.price * product.quantity));
                }, 0);
            }
            if (vm.data.discount) {
                total = total - (total * vm.data.discount / 100);
            }

            return total.toFixed(2);
        }

        function saveInvoice() {
            vm.isSaved = false;
            if (vm.currentInvoice) {
                vm.currentInvoice.customer_id = vm.data.customer_id;
                vm.currentInvoice.discount = vm.data.discount;
                vm.currentInvoice.total = totalPrice();

                vm.currentInvoice.$update();
            } else {
                vm.currentInvoice = new invoices(vm.data);
                vm.currentInvoice.$save();
            }
            vm.isCreated = true;
            $timeout(function () {
                vm.isSaved = true;
            }, 400);
        }

    }
})();
;(function () {
    angular
        .module('app')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$resourceProvider', '$httpProvider'];

    function mainConfig($stateProvider, $urlRouterProvider, $resourceProvider, $httpProvider) {

        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.interceptors.push('request');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'templates/invoice/all/all-invoice.html',
                controller: 'AllInvoiceController',
                controllerAs: 'vm',
                resolve: {
                    invoicesData: function (invoices) {
                        return invoices.query().$promise;
                    }
                }
            })
            .state('invoice', {
                url: '/invoice',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('invoice.new', {
                url: '/new',
                templateUrl: 'templates/invoice/new/new-invoice.html',
                controller: 'NewInvoiceController',
                controllerAs: 'vm',
                resolve: {
                    productsData: function (products) {
                        return products.query().$promise;
                    },
                    customersData: function (customers) {
                        return customers.query().$promise;
                    }
                }
            })
            .state('invoice.edit', {
                url: '/edit/:id',
                templateUrl: 'templates/invoice/new/new-invoice.html',
                controller: 'NewInvoiceController',
                controllerAs: 'vm',
                resolve: {
                    productsData: function (products) {
                        return products.query().$promise;
                    },
                    customersData: function (customers) {
                        return customers.query().$promise;
                    }
                }
            })
            .state('invoice.all', {
                url: '/all',
                templateUrl: 'templates/invoice/all/all-invoice.html',
                controller: 'AllInvoiceController',
                controllerAs: 'vm',
                resolve: {
                    invoicesData: function (invoices) {
                        return invoices.query().$promise;
                    }
                }
            })
            .state('product', {
                url: '/product',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('product.all', {
                url: '/all',
                templateUrl: 'templates/product/all/all-product.html',
                controller: 'AllProductController',
                controllerAs: 'vm',
                resolve: {
                    productsData: function (products) {
                        return products.query().$promise;
                    }
                }
            })
            .state('product.edit', {
                url: '/edit/:id',
                templateUrl: 'templates/product/edit/edit-product.html',
                controller: 'EditProductController',
                controllerAs: 'vm',
                resolve: {
                    productData: function (products, $stateParams) {
                        return products.get($stateParams).$promise;
                    }
                }
            })
            .state('customer', {
                url: '/customer',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('customer.all', {
                url: '/all',
                templateUrl: 'templates/customer/all/all-customer.html',
                controller: 'AllCustomerController',
                controllerAs: 'vm',
                resolve: {
                    customersData: function (customers) {
                        return customers.query().$promise;
                    }
                }
            })
            .state('customer.edit', {
                url: '/edit/:id',
                templateUrl: 'templates/customer/edit/edit-customer.html',
                controller: 'EditCustomerController',
                controllerAs: 'vm',
                resolve: {
                    customerData: function (customers, $stateParams) {
                        return customers.get($stateParams).$promise;
                    }
                }
            });


    }


})();


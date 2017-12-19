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
        $urlRouterProvider.when('/');

        $stateProvider
            .state('app', {
                url: '/',
                templateUrl: 'templates/invoice/all/all-invoice.html',
                controller: 'AllInvoiceController',
                controllerAs: 'vm',
                resolve: {
                    invoicesData: function (invoices) {
                        return invoices.query();
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
                        return products.query();
                    },
                    customersData: function (customers) {
                        return customers.query();
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
                        return invoices.query();
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
                        return products.query();
                    }
                }
            });


    }


})();


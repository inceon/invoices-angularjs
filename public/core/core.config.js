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
                templateUrl: 'templates/index/index.html',
                controller: 'IndexController',
                controllerAs: 'vm',
                resolve: {
                    invoicesData: function (invoices) {
                        return invoices.query();
                    }
                }
            });


    }


})();


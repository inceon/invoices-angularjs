;(function () {

    'use strict';

    angular.module('service.customers', [])
        .service('customers', customers);


    customers.$inject = ['$resource', 'url'];

    function customers($resource, url) {

        return $resource(url.customers + '/:id', {id:'@id'});

    }
})();
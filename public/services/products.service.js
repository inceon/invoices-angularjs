;(function () {

    'use strict';

    angular.module('service.products', [])
        .service('products', products);


    products.$inject = ['$resource', 'url'];

    function products($resource, url) {

        return $resource(url.products, {
            id:'@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    }
})();
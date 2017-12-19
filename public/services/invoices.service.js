;(function () {

    'use strict';

    angular.module('service.invoices', [])
        .service('invoices', invoices);


    invoices.$inject = ['$resource', 'url'];

    function invoices($resource, url) {

        return $resource(url.invoices + '/:id', {
            id:'@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    }
})();
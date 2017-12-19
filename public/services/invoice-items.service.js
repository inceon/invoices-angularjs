;(function () {

    'use strict';

    angular.module('service.invoiceItems', [])
        .service('invoiceItems', invoiceItems);


    invoiceItems.$inject = ['$resource', 'url'];

    function invoiceItems($resource, url) {

        return $resource(url.invoiceItems, {
            id:'@id'
        }, {
            update: {
                method: 'PUT'
            }
        });

    }
})();
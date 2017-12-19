;(function () {

    'use strict';

    angular.module('service.invoiceItems', [])
        .service('invoiceItems', invoiceItems);


    invoiceItems.$inject = ['$resource', 'url'];

    function invoiceItems($resource, url) {

        return $resource(url.invoiceItems, {
            invoice_id : '@invoice_id',
            id         : '@id',
        }, {
            update: {
                method: 'PUT'
            }
        });

    }
})();
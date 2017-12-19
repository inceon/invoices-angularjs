;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    function url() {
        var baseUrl = '/api/';

        return {
            invoices:       baseUrl + 'invoices/:id',
            invoiceItems:   baseUrl + 'invoices/:invoice_id/items/:id',
            products:       baseUrl + 'products/:id',
            customers:      baseUrl + 'customers/:id'
        };
    }

})();
;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    function url() {
        var baseUrl = '/api/';

        return {
            invoices:   baseUrl + 'invoices'
        };
    }

})();
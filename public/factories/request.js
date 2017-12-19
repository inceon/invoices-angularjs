(function () {
    'use strict';
    angular
        .module('factory.request', [])
        .factory('request', request);

    request.$inject = [];

    /**
     * Interceptor to the standard $http function
     */

    function request() {
        return {
            request: function (config) {
                return config;
            },

            response: function (response) {
                console.log('response', response.config.url, response);
                return response;
            },

            responseError: function (response) {
                if (response.status === 200) {
                    console.error('Server Error: ' + response.data)();
                } else if (response.status === -1) {
                    console.error('Server unavailable')();
                } else if (response.status === 500) {
                    console.error('Server Error: ' + response.status + ' ' + response.data.message)();
                } else if (response.status === 403) {
                    console.error('Access denied.')();
                } else if (response.status === 401) {
                    // console.error(response.data.name)();
                    return response;
                } else {
                    console.error('Server Error: ' + response.status + ' ' + response.statusText)();
                }

                return response;
            }
        };
    }
})();
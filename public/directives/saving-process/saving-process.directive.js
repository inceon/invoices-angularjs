;(function () {
    'use strict';

    angular
        .module('directive.saving-process', [])
        .directive('savingProcess', function ( ) {
            return {
                restrict: 'E',
                templateUrl: 'directives/saving-process/saving-process.html',
                scope: {
                    created: '=',
                    saved: '='
                },
                controller: SavingProcessCtrl,
                controllerAs: 'vm',
                bindToController: true

            };
        });

    function SavingProcessCtrl() {

        var vm = this;

    }

})();

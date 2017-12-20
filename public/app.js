;(function () {
    angular.module('app',
        [
            'app.core',
            'blocks.directives',
            'blocks.request',
            'blocks.services',
            'blocks.filters'

        ])
        .run(runBlock);

    function runBlock() {
    }
})();

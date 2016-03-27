(function ()
{
    'use strict';

    angular
        .module('app.methods', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.methods', {
                url    : '/methods',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/methods/methods.html',
                        controller : 'OverviewController as vm'
                    }
                }
            });


        msNavigationServiceProvider.saveItem('polliteracy.methods', {
            title    : 'Methods',
            icon     : 'icon-tile-four',
            state    : 'app.methods',
            weight   : 1
        });

    }
})();

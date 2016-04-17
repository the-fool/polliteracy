(function ()
{
    'use strict';

    angular
        .module('app.reporting', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.reporting', {
                url    : '/reporting',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/reporting/reporting.html',
                        controller : 'OverviewController as vm'
                    }
                }
            });


        msNavigationServiceProvider.saveItem('polliteracy.reporting', {
            title    : 'Reporting',
            icon     : 'icon-tile-four',
            state    : 'app.reporting',
            weight   : 1
        });

    }
})();

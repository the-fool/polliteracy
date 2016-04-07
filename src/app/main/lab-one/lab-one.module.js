(function ()
{
    'use strict';

    angular
        .module('app.lab-one', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.lab-one', {
                url    : '/lab-one',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/lab-one/lab-one.html',
                        controller : 'OverviewController as vm'
                    }
                }
            });


        msNavigationServiceProvider.saveItem('polliteracy.lab_one', {
            title    : 'Lab One',
            icon     : 'icon-tile-four',
            state    : 'app.lab-one',
            weight   : 1
        });

    }
})();

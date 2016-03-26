(function ()
{
    'use strict';

    angular
        .module('app.overview', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.overview', {
                url    : '/overview',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/overview/overview.html',
                        controller : 'OverviewController as vm'
                    }
                }
            });


        msNavigationServiceProvider.saveItem('polliteracy.overview', {
            title    : 'Overview',
            icon     : 'icon-tile-four',
            state    : 'app.overview',
            weight   : 1
        });
    }
})();

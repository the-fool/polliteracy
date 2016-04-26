(function ()
{
    'use strict';

    angular
        .module('app.conclusion', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.conclusion', {
                url    : '/conclusion',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/conclusion/conclusion.html',
                        controller : 'OverviewController as vm'
                    }
                }
            });


        msNavigationServiceProvider.saveItem('polliteracy.conclusion', {
            title    : 'Conclusion',
            icon     : 'icon-cake',
            state    : 'app.conclusion',
            weight   : 1
        });

    }
})();

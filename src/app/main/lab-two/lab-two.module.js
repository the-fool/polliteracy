(function ()
{
    'use strict';

    angular
        .module('app.lab-two', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.lab-two', {
                url    : '/lab-two',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/lab-two/lab-two.html',
                        controller : 'LabTwoController as vm'
                    }
                }
            });


        msNavigationServiceProvider.saveItem('polliteracy.lab_two', {
            title    : 'Lab Two',
            icon     : 'icon-star-outline',
            state    : 'app.lab-two',
            weight   : 1
        });

    }
})();

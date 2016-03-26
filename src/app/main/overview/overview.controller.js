(function ()
{
    'use strict';

    angular
        .module('app.overview')
        .controller('OverviewController', OverviewController);

    /** @ngInject */
    function OverviewController()
    {
        var vm = this;

        // Data
        vm.helloText = "overview";

        // Methods

        //////////
    }
})();

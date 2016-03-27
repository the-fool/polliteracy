(function ()
{
    'use strict';

    angular
        .module('app.methods')
        .controller('MethodsController', MethodsController);

    /** @ngInject */
    function MethodsController()
    {
        var vm = this;

        // Data
        vm.helloText = "methods";

        // Methods

        //////////
    }
})();

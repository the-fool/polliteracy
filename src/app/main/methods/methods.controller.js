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
	vm.selectedIndex = 2;

	vm.onTabSelect = function(index) {
	    console.log(index);
	};
    }
})();

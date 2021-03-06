(function ()
{
    'use strict';

    angular
        .module('app.reporting')
        .controller('EarlyReportsController', EarlyReportsController);

    /** @ngInject */
    function EarlyReportsController()
    {
        var vm = this;
	vm.q1 = {
	    query: "Should there be a federal law prohibiting news organizations from broadcasting early predictions of political races before all the voting places are closed?",
	    options: [
		'Yes',
		'No'
	    ]
	};
    }
})();

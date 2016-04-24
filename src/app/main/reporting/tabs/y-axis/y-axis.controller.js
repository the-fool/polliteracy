(function ()
{
    'use strict';

    angular
        .module('app.reporting')
        .controller('YAxisController', YAxisController);

    /** @ngInject */
    function YAxisController()
    {
        var vm = this;
	vm.q1 = {
	    query: "A recent Quinnipiac poll was conducted where people were asked to say the first word that pops into their head when they think of Hillary Clinton.  The top word was \"Liar\".  In fact, \"Liar\" occurred twice as much as the top word with a positive connotation (\"experience\").  There were 1500 responses to this poll. Should you find these results to be significant?",
	    options: [
		'Yes -- twice as much as the next is a very large difference.',
		'No -- there is not enough information'
	    ],
	    userAnswer: undefined,
	    correct: 1
	};
	
    }
})();

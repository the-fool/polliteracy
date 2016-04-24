(function ()
{
    'use strict';

    angular
        .module('app.reporting')
        .controller('CredentialsController', CredentialsController);

    /** @ngInject */
    function CredentialsController()
    {
        var vm = this;
	vm.q1 = {
	    query: "Polls with loaded or biased questions are unfortunately common.  But how far do they go?  Select any of the following you think were real questions asked in large-scale political polls.",
	    options: [
		'[Texas gubernatorial race] \"Would you be more or less likely to vote for Governor Richards if you knew her staff is dominated by lesbians?\"',
		'[Republican Presidential Primary]\"Would you be more likely or less likely to vote for John McCain for president if you knew he had fathered an illegitimate black child?\"',
		'[General Presidential Election]\"If you knew Barack Obama was supported by Hamas, would it change your vote?  Or would it change your vote if you knew his church had made antisemitic statements?\"'
	    ],
	    userAnswer: []
	};

	vm.toggle = function(i) {
	    var idx = vm.q1.userAnswer.indexOf(i);
            if (idx > -1) {
		vm.q1.userAnswer.splice(idx, 1);
            }
            else {
		vm.q1.userAnswer.push(i);
            }

	    if (vm.q1.userAnswer.length === 3) {
		vm.q1.correct = true;
	    } else {
		vm.q1.correct = false;
	    }

	};
    }
})();

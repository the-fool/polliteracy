(function()
{
  'use strict';

  angular
    .module('app.methods')
    .controller('QualityQuantityController', QualityQuantityController);

    /** @ngInject */
    function QualityQuantityController($scope)
    {
      var vm = this;

      vm.isAnswerShown = false;
	vm.q2 = {
	    options: [
		'Owned a registered automobile',
		'Owned a telephone line',
		'Subscribed to magazines',
		'Paid dues as a member of certain elite clubs',
		'Possessed the time, incentive, and money to mail back a questionnaire'
	    ],
	    selections: [],
	    isCorrect: false
	};
	vm.toggle = function (item, selected) {
	    var i = vm.q2.selections.indexOf(item);
	    if (i > -1) {
		vm.q2.selections.splice(i,1);
	    } else {
		vm.q2.selections.push(item);
	    }

	    if (vm.q2.selections.length === vm.q2.options.length) {
		vm.q2.isCorrect = true;
	    } else {
		vm.q2.isCorrect = false;
	    }
		
	};
      vm.q1 =
      {
          'query'   : "Let's say you're responsible for gathering a sample for a " +
	      "political poll.  You do not want to leave any groups of " +
	      "people out, which is to say that you want your poll to be random." +
	      "Which basic method for reaching out to people do you think is " +
	      "the best way to ensure that your sample " +
	      "is unbiased?",
                   
        'options' : [
            "Interview pedestrians at busy public places",
            "Call phone numbers selected at random",
            "Stuff mailboxes with paper questionnaires",
            "Put the survey online at various popular websites",
        ],
        'correct' : 1,
        'userAnswer' : null
      };
    }
})();

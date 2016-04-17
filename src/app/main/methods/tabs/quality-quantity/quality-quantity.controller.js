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

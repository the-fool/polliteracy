(function()
{
  'use strict';

  angular
    .module('app.methods')
    .controller('LitDigQuizController', SampleSizeController);

    /** @ngInject */
    function SampleSizeController($scope)
    {
      var vm = this;

      vm.isAnswerShown = false;

      vm.q1 =
      {
          'query'   : "Why was The Literary Digest's poll so incorrect " +
	      "with predicting the 1936 election?",
        'options' : [
            "Its poll was too large",
            "Its poll was not large enough",
            "Its polling methods were flawed",
            "Being wrong was just a random accident",
        ],
        'correct' : 2,
        'userAnswer' : null
      };

    }
})();

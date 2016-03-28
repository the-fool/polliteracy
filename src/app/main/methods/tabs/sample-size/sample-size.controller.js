(function()
{
  'use strict';

  angular
    .module('app.methods')
    .controller('SampleSizeController', SampleSizeController);

    /** @ngInject */
    function SampleSizeController($scope)
    {
      var vm = this;

      vm.isAnswerShown = false;

      vm.q1 =
      {
        'query'   : "Your population size is 1,000,000. In order to have a " +
                    "respectable poll, how large should you make your sample size?",
        'options' : [
            "100 (.01%)",
            "1,000 (0.1%)",
            "10,000 (1%)",
            "100,000 (10%)",
            "500,000 (50%)"
        ],
        'correct' : 1,
        'userAnswer' : null
      };

      vm.q2 =
      {
        'query' : "Okay.  Now suppose that we have a population 10x bigger.  " +
                  "If we want a good, useful poll, then how big should the sample size " +
                  "be for a population of 10,000,000?",
        'options' :  [
          "1,000 (0.01%)",
          "10,000 (0.1%)",
          "100,000 (1%)",
          "1,000,000 (10%)",
          "5,000,000 (50%)"
        ],
        'correct'   : 0,
        'userAnswer': null
      };

    }
})();

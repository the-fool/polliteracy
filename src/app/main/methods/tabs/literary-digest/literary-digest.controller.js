(function()
{
  'use strict';

  angular
    .module('app.methods')
    .controller('LiteraryDigestController', LiteraryDigestController);

    /** @ngInject */
    function LiteraryDigestController($scope)
    {
      var vm = this;

      vm.isAnswerShown = false;

      vm.q1 =
      {
        'query'   : "Alright -- here is a simple question based on the story we"
                    +" just told.  Is sample size alone what"
                    +" determines whether or not a poll is good?"
                    ,
        'options' : [
            "Yes -- Sample Size is all that counts",
            "No -- there are other factors",
            "I need to run eleven-million tests first . . . "
        ],
        'correct' : 1,
        'userAnswer' : null
      };
    }
})();

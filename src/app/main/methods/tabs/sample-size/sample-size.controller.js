(function()
{
  'use strict';

  angular
    .module('app.methods')
    .controller('SampleSizeController', SampleSizeController);

    /** @ngInject */
    function SampleSizeController()
    {
      var vm = this;

      vm.q1 = {
        'query'   : "Your population size is 1,000,000. In order to have a " +
                    "respectable poll, how large should you make your sample size?"
        'options' : [
            "1,000 (0.1%)",
            "10,000 (1%)",
            "100,000 (10%)",
            "500,000 (50%)"
        ],
        'correct' : 0
      };

    }
})

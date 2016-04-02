( function()
{
  'use strict';

  angular.module('app.methods')
    .directive('sampleSizeD3', sampleSizeD3);

  /** @ngInject */
  function sampleSizeD3(d3)
  {
    return {
      restrict: 'E',
      compile: compile;
      controller: sampleSizeController,
      controllerAs: 'vm',
      templateUrl: 'app/main/methods/tabs/quality-quantity/directives/sample-size-viz.html'
    };

    function sampleSizeController()
    {

    }

    function compile()
    {
      var svg = d3.select(tElement[0]).append('svg');
      
    }

  }
})();

(function()
{
  'use strict';

  angular
    .module("app.methods")
    .filter("selectionPercent", selectionPercent);

  function selectionPercent() {
      return function(input, population) {
        population = population || 5000;
        var out = String( (input / population * 100).toFixed(2) );
        out += "%";
        return out;
      };
  }
})();

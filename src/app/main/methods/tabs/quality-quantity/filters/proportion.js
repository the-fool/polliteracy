(function()
{
  'use strict';

  angular
    .module("app.methods")
    .filter("proportion", proportion);

  function proportion(selectionPercentFilter) {
      return function(input) {
        var proportion = input.reduce(function(proportion, value)
        {
          if (value.type === 'red')
            proportion.red++;
          else
            proportion.blue++;
          return proportion;
        }, {red: 0, blue: 0});

        return proportion.red + " / " + proportion.blue
              + " (" + selectionPercentFilter(proportion.red, proportion.blue) +")";
      };
  }
})();

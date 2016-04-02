( function(ng)
{
  'use strict';

   ng.module('app.core')
     .service('d3', D3Service);

   /** @ngInject */
   function D3Service() {
     return d3;
   }

})(angular);

(function ()
{
    'use strict';

    angular
        .module('polliteracy')
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
      // Navigation
      msNavigationServiceProvider.saveItem('polliteracy', {
          title : 'CHAPTERS',
          group : true,
          weight: 1
      });
    }

})();

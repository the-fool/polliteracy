(function ()
{
    'use strict';

    /**
     * Main module of the polliteracy
     */
    angular
        .module('polliteracy', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Overview
            'app.overview'
        ]);
})();

(function() {
    'use strict';

    angular
	.module('polliteracy')
        .directive('tabNavBar', tabNavBar);

    /** @ngInject */
    function tabNavBar($anchorScroll, $window) {

	function ctrl() {
	    var vm = this;

	    vm.scrollUp = function() {
		var e = document.getElementById("content");
		e.scrollTop = 0;
		Ps.update(e);
	    };
	    vm.$onInit = function() {
		vm.numTabs = parseInt(vm.numTabs);
	    };
	}
	
	return {
	    restrict: 'E',
	    scope: {
		activeTab: '=',
		numTabs: '@'
	    },
	    templateUrl: "app/main/directives/tab-nav-bar/tab-nav-bar.html",
	    controller: ctrl,
	    priority: 1000,
	    terminal: true,
	    controllerAs: 'vm',
	    bindToController: true,
	    compile: function compile(tElement, tAttrs) {
		return {
		    pre: function(){
		    },
		    post:function postLink(scope, iElement, iAttrs) {
		    }
		}
	    }
	}

    }
})();

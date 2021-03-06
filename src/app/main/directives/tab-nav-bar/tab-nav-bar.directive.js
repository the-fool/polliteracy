(function() {
    'use strict';

    angular
	.module('polliteracy')
        .directive('tabNavBar', tabNavBar);

    /** @ngInject */
    function tabNavBar($document, $timeout, msNavigationService, $state) {

	function ctrl() {
	    var vm = this;

	    vm.states = msNavigationService.getNavigationObject()[0].children;
	    vm.scrollUp = function() {
		var e = angular.element('#content');
		angular.element(document.querySelector('#content')).scrollTo(0, 0, 200);
	    };
	    vm.nextChapter = nextChapter;
	    vm.previousChapter = previousChapter;
	    
	    function nextChapter() {
		for (var i = 0; i < vm.states.length; i++) {
		    if (vm.states[i].state === $state.current.name) {
			$state.go(vm.states[i + 1].state);
			break;
		    }
		}
	    }
	    
	    function previousChapter() {
		console.log("prev");
		for (var i = 0; i < vm.states.length; i++) {
		    if (vm.states[i].state === $state.current.name) {
			$state.go(vm.states[i - 1].state);
			break;
		    }
		}
	    }
	    
	    vm.$onInit = function() {
		vm.numTabs = parseInt(vm.numTabs);
		for (var i = 0; i < vm.states.length; i++) {
		    if (vm.states[i].state === $state.current.name) {
			vm.currentStateIdx = i;
			break;
		    }
		}
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

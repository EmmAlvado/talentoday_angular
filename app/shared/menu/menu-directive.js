'use strict';

angular.module('MenuDirective', []).
	directive('ngMenu', [ '$filter', '$location', '$route', '$rootScope', function($filter, $location, $route, $rootScope){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			//scope: {
			//
			//}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'app/shared/menu/menu.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				console.log("Menu Directive")

	  			$scope.$watch('isCurrentPage', function(newValue, oldValue) {
					if (!angular.equals(newValue, oldValue)){
						$rootScope.isCurrentPage = newValue;
					}
				})
				
			}
		};
	}]);

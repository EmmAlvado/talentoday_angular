'use strict';

angular.module('HomeDirective', []).
		directive('ngHome', [ function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude) {
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: 'app/components/home/home-view.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {

				// VARIABLES
		        $scope.windowW = $( window ).width();


				// EVENTS
		        $(window).on("resize.doResize", function (){
		            $scope.windowW = $( window ).width();
		            $scope.$apply(function(){
		                if ($scope.windowW > screenSM){
		                	$scope.isMobileDevice = false;
		                }else{
		                	console.debug(2)
		                	$scope.isMobileDevice = true;
		                	$scope.bShowMenu = false;
		                }
		            })
		        });

		        $scope.$on("$destroy",function (){
		            //remove the handler added earlier
		            $(window).off("resize.doResize");
		        });

			}

		};
	}]);

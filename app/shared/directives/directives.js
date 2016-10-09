'use strict';

angular.module('Directives', []).
	directive('ngPlaceholder', ['$timeout', function($timeout){
		// Runs during compile
		return {
			restrict: 'A',
			link: function($scope, iElm, iAttrs, controller) {
				var aInputPlaceholder = iElm.find("input.placeholder");

				aInputPlaceholder.on('focus', function(e){
					checkPlaceholder(e.target);
				})

				aInputPlaceholder.on('blur', function(e){
					checkPlaceholder(e.target);
				})

				function checkPlaceholder(el){
					if ( $(el).val().length == 0 && !$(el).is(document.activeElement)){
						$(el).prev().removeClass('floating');
					} else {
						$(el).prev().addClass('floating');
					}
				}

				//init
				$timeout(function(){
					for (var i = 0; i < aInputPlaceholder.length; i++) {
						checkPlaceholder(aInputPlaceholder[i]);
					};
				}, 200);
			}
		};
	}])

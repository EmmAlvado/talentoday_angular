'use strict';

/* Services */
angular.module('Services', []).
	run(["$rootScope", "$location", "$window", "$route", "$timeout", function ($rootScope, $location, $window, $route, $timeout) {

		$rootScope.$on("$routeChangeSuccess", function () {
			$rootScope.isCurrentPage = $route.current.activetab;
		});

	}])
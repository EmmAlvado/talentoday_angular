'use strict';
angular.module('appRoutes', []).
    config(['$routeProvider', function($routeProvider) {
         $routeProvider           
            .when('/', {
                templateUrl: 'app/component/home/home.html',
                controller: 'HomeController',
                activetab: 'home'
            })

            .when('/home', {
                templateUrl: 'app/component/home/home.html',
                controller: 'HomeController',
                activetab: 'home'
            })
            
            .when('/favoris', {
                templateUrl: 'app/component/favoris/favoris.html',
                controller: 'FavorisController',
                activetab: 'favoris'
            })
            
            .when('/details/:hero', {
                templateUrl: 'app/component/details/details.html',
                controller: 'DetailsController',
                activetab: 'details'
            })
            

            .otherwise({
                redirectTo: '/home'
            });

    }]);

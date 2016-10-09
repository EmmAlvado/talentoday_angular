'use strict';

angular.module('HomeController', []).
    controller('HomeController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
        console.log('HomeController')

        // INIT
        if($localStorage.runners != undefined){
                    
            $scope.runners = $localStorage.runners;

        }else{

			$http({
			  method: 'GET',
			  url: 'assets/json/runners.json'
			}).then(function successCallback(response) {
                $scope.runners = response.data;
			    $localStorage.runners = response.data;
                
		  	}, function errorCallback(response) {
			    console.log('fail', response.data);
			});
        
        }

        $scope.favoriSystem = function(hero){

        	if($localStorage.runners[hero].Favoris == "icon-star-empty"){
        		$localStorage.runners[hero].Favoris = "icon-star-full";
        	}else{
        		$localStorage.runners[hero].Favoris = "icon-star-empty";        		
        	}

        	$scope.runners[hero].Favoris = $localStorage.runners[hero].Favoris;

        }



    }]);

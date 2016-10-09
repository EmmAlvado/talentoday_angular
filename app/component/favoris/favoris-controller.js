'use strict';

angular.module('FavorisController', []).
    controller('FavorisController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage) {
        console.log('FavorisController')

          // INIT
        if($localStorage.runners != undefined){
        
        	$scope.runnersArray = [];

        	for( var n in $localStorage.runners){
        		$scope.runnersArray.push($localStorage.runners[n]);
        	}

        }else{

			$http({
			  method: 'GET',
			  url: 'assets/json/runners.json'
			}).then(function successCallback(response) {
			    $localStorage.runners = response.data;

			    $scope.runnersArray = [];

	        	for( var n in $localStorage.runners){
	        		$scope.runnersArray.push($localStorage.runners[n]);
	        	}

		  	}, function errorCallback(response) {
			    console.log('fail', response.data);
			});
        
        }

        $scope.favoriSystem = function(id, key){
        	if($localStorage.runners[id].Favoris == "icon-star-empty"){
        		$localStorage.runners[id].Favoris = "icon-star-full";
        	}else{
        		$localStorage.runners[id].Favoris = "icon-star-empty";        		
        	}
        	$scope.runnersArray[key].Favoris = $localStorage.runners[id].Favoris;

        }

        $scope.filterFav = function(item){
        	return item.Favoris == "icon-star-full";
		}



    }]);

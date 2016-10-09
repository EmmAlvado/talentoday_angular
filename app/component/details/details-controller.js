'use strict';

angular.module('DetailsController', []).
    controller('DetailsController', ['$scope', '$http', '$routeParams', '$localStorage', function($scope, $http, $routeParams, $localStorage) {
        console.log('DetailsController')

        // INIT


        if($localStorage.runners != undefined){
        
        	$scope.runners = $localStorage.runners;
		    $scope.hero = $scope.runners[$routeParams.hero];
		    document.getElementById("banner-hero").style.backgroundImage = "url('assets/img/"+$scope.hero.Wall+"')";
	  
        }else{

			$http({
			  method: 'GET',
			  url: 'assets/json/runners.json'
			}).then(function successCallback(response) {
			    $scope.runners = response.data;
			    $localStorage.runners = response.data;
		    	$scope.hero = $scope.runners[$routeParams.hero];
		    	document.getElementById("banner-hero").style.backgroundImage = "url('assets/img/"+$scope.hero.Wall+"')";
	  
		  	}, function errorCallback(response) {
			    console.log('fail', response.data);
			});
        
        }


        $scope.favoriSystem = function(){
            if($localStorage.runners[$routeParams.hero].Favoris == "icon-star-empty"){
                $localStorage.runners[$routeParams.hero].Favoris = "icon-star-full";
            }else{
                $localStorage.runners[$routeParams.hero].Favoris = "icon-star-empty";               
            }

            $scope.hero.Favoris = $localStorage.runners[$routeParams.hero].Favoris;
        }



        $scope.editHero = function(el ,type){

            $localStorage.runners[$routeParams.hero][type] = el.target.innerHTML.trim();

        }



    }]);

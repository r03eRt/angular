angular.module("ejemploApp").controller('PeliculasCarteleraCtrl', ['$scope','ApiService', function($scope,ApiService){


	ApiService
		.consultaApi("movie/now_playing")
		.then(
			function(resultado){//ok
				$scope.peliculas=resultado.data.results;
			},
			function(){//not ok

				alert("algo no fue bien");

			}
		);
	
}]);
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

	//promesas sin servicio hecha diractamente
	/*$http
		.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ccaf7bb76ee50f227f4c7d1cb483d83d&language=es")
		.then(
			function(resultado){//ok
				$scope.peliculas=resultado.data.results;
			},
			function(){//not ok

				alert("algo no fue bien");

			}
		);
	*/
}]);
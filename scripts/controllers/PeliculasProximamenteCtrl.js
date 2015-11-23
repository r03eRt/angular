angular.module("ejemploApp").controller('PeliculasProximamenteCtrl', ['$scope','$http', function($scope,$http){
	

	//promesas
	$http
		.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ccaf7bb76ee50f227f4c7d1cb483d83d&language=es")
		.then(
			function(resultado){//ok
				$scope.peliculas=resultado.data.results;
			},
			function(){//not ok

				alert("algo no fue bien");

			}
		);


}]);
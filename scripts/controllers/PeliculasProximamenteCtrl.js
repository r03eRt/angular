angular.module("ejemploApp").controller('PeliculasProximamenteCtrl', ['$scope',"ApiService", function($scope,ApiService){
	

	ApiService
		.consultaApi("movie/upcoming")
		//promesa
		.then(
			function(resultado){//ok
				$scope.peliculas=resultado.data.results;
			},
			function(){//not ok

				alert("algo no fue bien");

			}
		);

}]);
angular.module("ejemploApp").controller('PeliculasProximamenteCtrl', ['$scope',"ApiService",'Peliculas', function($scope,ApiService,Peliculas){

	//le pasamos a la vista la lista
	$scope.peliculas=Peliculas.data.results;
	
/*
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
		*/
}]);
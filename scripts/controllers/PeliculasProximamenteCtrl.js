angular
.module("ejemploApp")
.controller('PeliculasProximamenteCtrl',
 ['$scope',"ApiService",'Peliculas','$location', function($scope,ApiService,Peliculas,$location){

	//le pasamos a la vista la lista
	$scope.peliculas=Peliculas.data.results;
	$scope.rutaImagen=function(ruta){
			return ApiService.obtenerRutaImagen(45,ruta);
	};

	$scope.verDetalle=function(id){
		$location.path("/peliculas/detalles").search({
			idPelicula:id
		});
	}
	
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
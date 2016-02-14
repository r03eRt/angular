angular.module("ejemploApp",["ngRoute","route-segment","view-segment"]);

angular.module("ejemploApp").config(["$routeSegmentProvider","$routeProvider",function($routeSegmentProvider,$routeProvider){
	//rutas para cada ruta
	//lo que tenga que ocurrir que pase en el segmento películas
	$routeSegmentProvider.when("/peliculas","peliculas");
	$routeSegmentProvider.when("/series","series");
	//otro nivel mas debajo
	$routeSegmentProvider.when("/peliculas/proximamente","peliculas.proximamente");
	$routeSegmentProvider.when("/peliculas/cartelera","peliculas.cartelera");
	//por rute que no exista
	$routeProvider.otherwise({
		redirectTo:"/peliculas/proximamente/"
	});

	$routeSegmentProvider.when("/peliculas/detalles","peliculas.detalles");


	//que quien lo tenga que ejecutar sean el controlador peliculasCtrl usando la vista Peliculas.html
	$routeSegmentProvider.segment("peliculas",{
		controller:"PeliculasCtrl",
		templateUrl:"views/Peliculas.html"
	});

	//usamos within para incluir el nivel mas abajo 
	$routeSegmentProvider.within("peliculas").segment("proximamente",{
		controller:"PeliculasProximamenteCtrl",
		templateUrl:"views/PeliculasProximamente.html",
		//Necesito controlador una url y las cosas que necesito,en este caso 
		//necesito peliculas para pasarle la coleccion directamente al controlador
		//con esto evitamos que se trabaje dentro del controlador
		resolve:{
			Peliculas:["ApiService",function(ApiService){
				//resuelvo promesa
				return ApiService.consultaApi("movie/upcoming");

			}]
		}
	});


	$routeSegmentProvider.within("peliculas").segment("detalles",{
		controller:"PeliculasDetallesCtrl",
		templateUrl:"views/PeliculasDetalles.html",
		resolve:{
			Pelicula:["ApiService","$routeParams",function(ApiService,$routeParams){
				return ApiService.consultaApi("movie/"+$routeParams.idPelicula);
			}]
		}
	});

	//usamos within para incluir el nivel mas abajo 
	$routeSegmentProvider.within("peliculas").segment("cartelera",{
		controller:"PeliculasCarteleraCtrl",
		templateUrl:"views/PeliculasCartelera.html"
	});


	$routeSegmentProvider.segment("series",{
		controller:"SeriesCtrl",
		templateUrl:"views/Series.html"
	});



}]);
angular.module("ejemploApp").controller('PeliculasCtrl', ['$scope','$routeSegment', function($scope,$routeSegment){
	
	//utilizamos estos return para el navbar para que se activen cuando estamos en esa seccion
	//controlamos la ruta de los hijos
	$scope.rutaEsProximamente=function(){
		return $routeSegment.startsWith("peliculas.proximamente");
	};
	//cogido de app.js
	$scope.rutaEsCartelera=function(){
		return $routeSegment.startsWith("peliculas.cartelera");
	};

}]);
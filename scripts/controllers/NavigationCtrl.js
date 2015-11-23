angular.module("ejemploApp").controller('NavigationCtrl', ['$scope','$routeSegment', function($scope,$routeSegment){
	
	//utilizamos estos return para el navbar para que se activen cuando estamos en esa seccion
	//ruta empieza por peliculas
	$scope.rutaEsPeliculas=function(){
		return $routeSegment.startsWith("peliculas");
	};
	//ruta empieza por series
	//cogido de app.js
	$scope.rutaEsSeries=function(){
		return $routeSegment.startsWith("series");
	};

}]);
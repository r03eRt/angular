angular.module("ejemploApp").controller('NavigationCtrl', ['$scope','$routeSegment', function($scope,$routeSegment){
	
	//ruta empieza por peliculas
	$scope.rutaEsPeliculas=function(){
		return $routeSegment.startsWith("peliculas");
	};
	//ruta empieza por series
	$scope.rutaEsSeries=function(){
		return $routeSegment.startsWith("series");
	};

}]);
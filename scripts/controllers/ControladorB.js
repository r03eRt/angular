angular.module("ejemploApp").controller("ControladorB",["$scope",function($scope){

	$scope.$on("EventoHaciaAbajo",function(event,datos){
		alert(datos);
	});
	$scope.$emit("EventoHaciaArriba","emit");
}]);


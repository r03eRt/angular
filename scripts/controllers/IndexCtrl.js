angular.module("ejemploApp").controller("IndexCtrl",["$scope",function($scope){


	$scope.haciaAbajo=function(){
			$scope.$broadcast("EventoHaciaAbajo","broadcast");
	}


	$scope.$on("EventoHaciaArriba",function(event,datos){
		alert(datos);
	});

}]);


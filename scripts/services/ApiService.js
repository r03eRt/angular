angular.module("ejemploApp").service("ApiService",["$http",function($http){

	this.consultaApi=function(servicio){

		return $http.get("https://api.themoviedb.org/3/"+servicio+"?api_key=ccaf7bb76ee50f227f4c7d1cb483d83d&language=es")
	}	
}]);
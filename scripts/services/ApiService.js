angular.module("ejemploApp").service("ApiService",["$http","configuracion",function($http,configuracion){

	this.consultaApi=function(servicio){

		return $http.get("https://api.themoviedb.org/"+configuracion.apiVersion+"/"+servicio+"?api_key="+configuracion.apiKey+"&language="+configuracion.lang+"")
	};

	this.obtenerRutaImagen=function(tamanyo,ruta){
		return ruta==null ? null:configuracion.rutaImagenApi+tamanyo+ruta;
	};

}]);
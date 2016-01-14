'use strict';

/**
 * @ngdoc service
 * @name intranetFrontEndApp.empleado
 * @description
 * # empleado
 * Service in the intranetFrontEndApp.
 */
angular.module('intranetFrontEndApp').service('EmpleadoService',['$http', 'BASE_URL',EmpleadoService]);

function EmpleadoService(){
	var Empleado={};

	this.getDatosEmpleado=function(){
		 $http.get(BASE_URL + '/web/users').success(function(data){
		 	Empleado=data;
		 });
	}

	this.getEmpleado=function(){return Empleado;};
		 
	

};
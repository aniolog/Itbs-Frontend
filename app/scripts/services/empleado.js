'use strict';

/**
 * @ngdoc service
 * @name intranetFrontEndApp.empleado
 * @description
 * # empleado
 * Service in the intranetFrontEndApp.
 */
angular.module('intranetFrontEndApp').service('EmpleadoService',['$http', 'BASE_URL',EmpleadoService]);

function EmpleadoService($http,BASE_URL){
	var Empleado={};
	var Empleados=[];

	this.getDatosEmpleado=function(){
		 $http.get(BASE_URL + '/empleados/perfil?$select=nombres,apellidos,ci,fecha_nac,fecha_ing,direccion,telefono,avisar_a,telf_contact,correo_e').success(function(data){
		 	Empleado=data[0];
		 });
	}


	this.getEmpleados=function(){
		 $http.get(BASE_URL + '/empleados/?$select=nombres,apellidos,ci,fecha_nac,fecha_ing,direccion,telefono,avisar_a,telf_contact,correo_e').success(function(data){
		 	Empleados=data;
		 });

	}

	this.getEmpleado=function(){
		return Empleado;};

	this.getEmpleadosList=function(){
		return Empleados;
	}
		 
	

};
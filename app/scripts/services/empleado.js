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
	var self=this;
	self.Empleado={};
	self.Empleados=[];
	self.Count=0;


	self.getDatosEmpleado=function(){
		 $http.get(BASE_URL + '/empleados/perfil?$select=nombres,apellidos,ci,fecha_nac,fecha_ing,direccion,telefono,avisar_a,telf_contact').success(function(data){
		 	self.Empleado=data[0];
		 });
	}
	self.getEmpleados=function(){
		 $http.get(BASE_URL + '/empleados/?$select=nombres,apellidos,ci,fecha_nac,fecha_ing,direccion,telefono,avisar_a,telf_contact,correo_e').success(function(data){
		 	self.Empleados=data;
		 });
	}

	self.getCount=function(){

		var success=function(data){
			self.Count=data.data;
		}
		var error=function(data){
			console.log(data);
		}
		$http.get(BASE_URL + '/empleados/count').then(success,error);
	}


	self.getEmpleadosCount=function(){
		return self.Count;
	}


	self.getEmpleado=function(){
		return self.Empleado;};

	self.getEmpleadosList=function(){
		return self.Empleados;
	}
		 
	

};
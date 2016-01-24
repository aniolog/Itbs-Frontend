'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:ActualizardatosprofesionalesCtrl
 * @description
 * # ActualizardatosprofesionalesCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
.controller('ActualizardatosprofesionalesCtrl',
	['$location','$scope','certificadoservice','MessagesFactory','$http',ActualizardatosprofesionalesCtrl]);


function ActualizardatosprofesionalesCtrl($location,$scope,certificadoservice,MessagesFactory,$http){
	var self=this;
	self.action="";
	self.curso={};
	self.curso.user=$scope.usuario;
	self.messages={};

	self.init=function(){
		console.log($location.search());
		self.action=$location.search().action;
	}

	self.submit=function(valid,flow){
			console.log(flow);

	}
	self.success=function(){
		
		self.messages = MessagesFactory.createMessages();
		self.messages.success.push('Certificado enviado con exito');
	}
	self.error=function(){
		self.messages = MessagesFactory.createMessages();
		self.messages.error.push('Certificado enviado con exito');
	}

	self.getTocken=function(){
		return $http.defaults.headers.common['Authorization'];
	}
	
	


}
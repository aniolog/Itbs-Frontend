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
	['$location','$scope','MessagesFactory','$http','informacionprofesional',ActualizardatosprofesionalesCtrl]);


function ActualizardatosprofesionalesCtrl($location,$scope,MessagesFactory,$http,informacionprofesional){
	var self=this;
	self.action="";
	self.messages={};

	self.curso={};
	self.estudio={};
	self.experiencia={};
	self.proyecto={};
	
	


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

	self.submitcourse=function(valid){
		self.curso.user=$scope.usuario;
		self.messages = MessagesFactory.createMessages();
		console.log(self.messages);
		informacionprofesional.submitCourse(self.curso,self.messages);
		console.log(self.curso);
	}
	
	self.submitstudy=function(valid){
		self.estudio.user=$scope.usuario;
		console.log(self.estudio);
	}
	self.submitexp=function(valid){
		self.experiencia.user=$scope.usuario;
		console.log(self.experiencia);
	}
	self.submitproyect=function(){
		self.proyecto.user=$scope.usuario;
		console.log(self.proyecto);
	}
	


}
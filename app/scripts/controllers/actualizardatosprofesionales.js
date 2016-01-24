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
	['$location','$scope','certificadoservice',ActualizardatosprofesionalesCtrl]);


function ActualizardatosprofesionalesCtrl($location,$scope,certificadoservice){
	var self=this;
	self.action="";
	self.curso={};
	self.curso.user=$scope.usuario;
	self.file={};

	self.init=function(){
		console.log($location.search());
		self.action=$location.search().action;
	}

	self.submit=function(valid,flow){
			console.log(flow);

	}
	self.click=function(e){
		certificadoservice.upload(e);
	}

	
	


}
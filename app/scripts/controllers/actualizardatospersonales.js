'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:ActualizardatospersonalesCtrl
 * @description
 * # ActualizardatospersonalesCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp').controller('ActualizardatospersonalesCtrl',['$scope','EmpleadoService','UserService','MessagesFactory',ActualizardatospersonalesCtrl]);

function ActualizardatospersonalesCtrl($scope,empleadoService,userService,MessagesFactory){

	var self = this;
    self.user = $scope.usuario;

	var showCarPanel=false;
	var showContactPanel=true;
	var showUserPanel=true;

	this.init=function(){
		empleadoService.getDatosEmpleado();
	}

	this.carPanelsVisible= function(){
		showCarPanel=!showCarPanel;
	}

	this.getCarPanelVisible=function(){
		return showCarPanel;
	}

	this.contactPanelsVisible= function(){
		showContactPanel=!showContactPanel;
	}

	this.getContactPanelVisible=function(){
		return showContactPanel;
	}

	this.userPanelsVisible= function(){
		showUserPanel=!showUserPanel;
	}

	this.getUserPanelVisible=function(){
		return showUserPanel;
	}

	this.getEmpleado=function(){
		return empleadoService.getEmpleado();
	}

	this.submitForm=function(valid){
		self.user.rol=$scope.usuario.rol;
		self.messages = MessagesFactory.createMessages();
		userService.updateUser(self.user,self.messages);

	}

}
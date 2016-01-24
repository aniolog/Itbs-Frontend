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
	self.empleado={};

	var showCarPanel=false;
	var showContactPanel=true;
	var showUserPanel=true;

	this.init=function(){
		self.user =  jQuery.extend(true, {}, userService.getUserData());    
        self.empleado= jQuery.extend(true, {}, empleadoService.getEmpleado());
		console.log(self.empleado);
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

		console.log(self.user);
		self.user.rol=$scope.usuario.rol;
		$scope.message= MessagesFactory.createMessages();
		self.messages = MessagesFactory.createMessages();
		userService.updateUser(self.user,self.empleado,self.messages,$scope.message);

	}

}
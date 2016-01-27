'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('MainCtrl',  ['$scope', 'UserService','EmpleadoService','vacacionesService', MainCtrl]);

function MainCtrl($scope,userService,empleadoService,vacacionesService){

	this.getEmpleados=function(){
		return empleadoService.getEmpleadosList();
	}

	this.init=function(){
		userService.getProfile();
		empleadoService.getDatosEmpleado();
		empleadoService.getEmpleados();
		vacacionesService.GetCount();
		
	
	}

	this.user=function(){
		return userService.getUserData();
	}

	this.GetVacationRequestCount=function(){
		return vacacionesService.GetRequestCount();
	};



}
'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('MainCtrl',  ['$scope', 'UserService','EmpleadoService', MainCtrl]);

function MainCtrl($scope,userService,empleadoService){

	this.getEmpleados=function(){
		return empleadoService.getEmpleadosList();
	}

	this.init=function(){
		empleadoService.getEmpleados();
	}

	this.user=function(){
		return userService.getUserData();
	}


}
'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('MainCtrl',  ['$scope', 'UserService', MainCtrl]);

function MainCtrl($scope,userService){

	this.getUsers=function(){
		return userService.getUsersList();
	}

	this.init=function(){
		userService.getUsers();
	}

	this.user=function(){
		console.log(userService.getUserData());
		return userService.getUserData();
	}


}
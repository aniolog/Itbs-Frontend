'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:UsermodalCtrl
 * @description
 * # UsermodalCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('UsermodalCtrl',['$scope',Controller]);


function Controller($scope){
	$scope.$watch('$scope.usuario',function(){
		alert('cambio');
		console.log($scope.usuario);
	});
	
};
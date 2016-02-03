'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:SolicitarvacacionesCtrl
 * @description
 * # SolicitarvacacionesCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp').controller('SolicitarvacacionesCtrl',['$scope','vacacionesService','MessagesFactory',SolicitarvacacionesCtrl]);


function SolicitarvacacionesCtrl($scope,vacacionesService,MessagesFactory){
	  


	$('.input-group.date').datepicker({
                    autoclose: true,
                    format: "dd-mm-yyyy",
                    todayBtn: "linked",
                    language: "es",
                    orientation: "bottom left",
                    min: 0});

	

	var self=this;
	self.solicitud={};
	self.message={};
	$scope.fecha_Inicio="";
	self.user=$scope.usuario;

	self.submit=function(valid){
		console.log(self.solicitud);
		self.message=MessagesFactory.createMessages();
		self.solicitud.user=$scope.usuario;
		vacacionesService.PostRequest(self.solicitud,self.message);

	}





}
'use strict';

/**
 * @ngdoc service
 * @name intranetFrontEndApp.documentos
 * @description
 * # documentos
 * Service in the intranetFrontEndApp.
 */
angular.module('intranetFrontEndApp')
.service('DocumentosService',['$http','BASE_URL','$window','MEDIA_URL',DocumentosService] );

function DocumentosService($http,BASE_URL,$window,MEDIA_URL){
	var self=this;
	self.ctUrl="";


	self.generateCT=function(itbsEmail){
		 $('#loadModal').modal('show'); 
		var success=function(data){
			console.log(data.data);
			$window.open(MEDIA_URL+"/documentos/"+data.data, '_blank');
			 $('#loadModal').modal('hide'); 

		}

		var error=function(data){
			console.log(data);
			 $('#loadModal').modal('hide'); 
		}
		$http.get(BASE_URL+'/documentos/ct/'+itbsEmail+"/").then(success,error);

	}






}
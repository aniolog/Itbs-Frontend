'use strict';

/**
 * @ngdoc service
 * @name intranetFrontEndApp.informacionprofesional
 * @description
 * # informacionprofesional
 * Service in the intranetFrontEndApp.
 */
angular.module('intranetFrontEndApp').service('informacionprofesional',['$http','BASE_URL',informacionprofesional]);

function informacionprofesional($http,BASE_URL){

	var self=this;

	self.submitCourse=function(course,message){

		var success=function(data){
			message.success.push('Certificado enviado con exito');
		}
		var error=function(data){
			message.error.push(data);
		}

		var req = {
                    method: 'POST',
                    url: BASE_URL+'/cursos/create',
                    data:course
                    };

         $http(req).then(success,error);


	}




}
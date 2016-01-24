'use strict';

/**
 * @ngdoc service
 * @name intranetFrontEndApp.certificadoservice
 * @description
 * # certificadoservice
 * Service in the intranetFrontEndApp.
 */
angular.module('intranetFrontEndApp').service('certificadoservice',['$http','BASE_URL',certificadoservice]);

function certificadoservice($http,BASE_URL){

	this.upload=function(file){
		  console.log(file)
		  var fd = new FormData();
          fd.append("file", file);
          console.log(fd);
          $http({
             method: 'POST',
             url: BASE_URL+"/certificados/create",
             data: file,
             headers: {
                'Content-Type': undefined,
                 transformRequest: angular.identity}}).then(
                     function(response) {
                        return response.data;},
                     function(response) {
                        console.log(response.data);});
             }

    


}
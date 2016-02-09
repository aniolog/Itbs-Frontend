'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:ConsultardatosempleadoCtrl
 * @description
 * # ConsultardatosempleadoCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp').controller('ConsultardatosempleadoCtrl',['EmpleadoService','UserService','MEDIA_URL',ConsultardatosempleadoCtrl]);

function ConsultardatosempleadoCtrl(empleadoService,userService,MEDIA_URL){
  this.empleadoseleccionado={}

  this.getUser=function(){
   userService.getUserProfile();
    return userService.getUserProfile();
  }

  this.getEmpledos=function(){
    return empleadoService.getEmpleadosList();
  }

  this.init=function(){
    empleadoService.getEmpleados();
  }

  this.setempleado=function(empleado){
    userService.getUser(empleado.correo_e);
   this.empleadoseleccionado=empleado;
  }

   this.getPhotoUrl=function(){
    return MEDIA_URL+"/fotos/";
  }


}
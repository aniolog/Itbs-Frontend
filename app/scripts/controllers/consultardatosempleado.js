'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:ConsultardatosempleadoCtrl
 * @description
 * # ConsultardatosempleadoCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp').controller('ConsultardatosempleadoCtrl',['EmpleadoService','UserService',ConsultardatosempleadoCtrl]);

function ConsultardatosempleadoCtrl(empleadoService,userService){
  this.empleadoseleccionado={}

  this.getUser=function(){
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

}
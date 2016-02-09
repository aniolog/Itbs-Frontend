'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:GenerardocumentosCtrl
 * @description
 * # GenerardocumentosCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('GenerardocumentosCtrl',['EmpleadoService','UserService','MEDIA_URL','DocumentosService',GenerardocumentosCtrl]);

function GenerardocumentosCtrl(empleadoService,userService,MEDIA_URL,documentosService){
  var self=this;
  self.selectedEmpleado={};

  self.init=function(){
    empleadoService.getEmpleados();
  }

  self.getEmpledos=function(){
    return empleadoService.getEmpleadosList();
  }

  self.setSelectedEmpleado=function(empleado){
    userService.getUser(empleado.correo_e);
    self.selectedEmpleado=empleado;


  }

  self.ctClick=function(){
    documentosService.generateCT(self.selectedEmpleado.correo_e);
  }


  self.getUserPhoto=function(){
    
      return userService.getUserProfile().foto;

  }

  self.getPhotoUrl=function(){
    return MEDIA_URL+"/fotos/";
  }

  self.getCrUrl=function(){
    console.log(documentosService.getCtUrl());
    return documentosService.getCtUrl();
  }

  self.goToCt=function(){
    alert("goin");
  }

}
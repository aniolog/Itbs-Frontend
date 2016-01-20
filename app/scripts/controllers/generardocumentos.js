'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:GenerardocumentosCtrl
 * @description
 * # GenerardocumentosCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('GenerardocumentosCtrl', function () {
    this.empleados=[
          {nombre:"Carlos",apellido:"Lozano",cedula:"1",datos:"test"},
          {nombre:"Isaac",apellido:"Arismedi",cedula:"2",datos:"test"},
          {nombre:"Eleana",apellido:"Torres",cedula:"3",datos:"test"},
          {nombre:"Julio",apellido:"Fonseca",cedula:"4",datos:"test"},
          {nombre:"Luis",apellido:"Depieri",cedula:"5",datos:"test"},
          {nombre:"Sarah",apellido:"Darocha",cedula:"6",datos:"test"},
          {nombre:"Carmen",apellido:"Bastardo",cedula:"7",datos:"test"},
          {nombre:"Ali",apellido:"Briceño",cedula:"8",datos:"test"},
          {nombre:"Carlos",apellido:"Pires",cedula:"9",datos:"test"}];

    this.setempleado=function(empleado){
            this.empleadoseleccionado=empleado;
          }


  });

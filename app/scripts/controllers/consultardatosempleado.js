'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:ConsultardatosempleadoCtrl
 * @description
 * # ConsultardatosempleadoCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp')
  .controller('ConsultardatosempleadoCtrl', function () {
    this.empleadoseleccionado=({});
    this.empleados=[
          {nombre:"Carlos",apellido:"Lozano",cedula:"1",datos:"test 01"},
          {nombre:"Isaac",apellido:"Arismedi",cedula:"2",datos:"test 02"},
          {nombre:"Eleana",apellido:"Torres",cedula:"3",datos:"test"},
          {nombre:"Julio",apellido:"Fonseca",cedula:"4",datos:"test"},
          {nombre:"Luis",apellido:"Depieri",cedula:"5",datos:"test"},
          {nombre:"Sarah",apellido:"Darocha",cedula:"6",datos:"test"},
          {nombre:"Carmen",apellido:"Bastardo",cedula:"7",datos:"test"},
          {nombre:"Ali",apellido:"Briceño",cedula:"8",datos:"test"},
          {nombre:"Carlos",apellido:"Pires",cedula:"9",datos:"test"}];

      this.setempleado=function(empleado){
        console.log(empleado);
        this.empleadoseleccionado=empleado;
      }
  });

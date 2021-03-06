'use strict';

/**
 * @ngdoc overview
 * @name intranetFrontEndApp
 * @description
 * # intranetFrontEndApp
 *
 * Main module of the application.
 */
angular
  .module('intranetFrontEndApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMask',
    'flow'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
         access: {
            requiredPermissions: [],
            requireLogin:true
        }
      })
      .when('/consultardatosempleado', {
        templateUrl: 'views/consultardatosempleado.html',
        controller: 'ConsultardatosempleadoCtrl',
        controllerAs: 'consultardatosempleado',
        access: {
            requiredPermissions: ['Administrador','RecursosHumanos'],
            requireLogin:true
        }
      })
      .when('/actualizardatospersonales', {
        templateUrl: 'views/actualizardatospersonales.html',
        controller: 'ActualizardatospersonalesCtrl',
        controllerAs: 'actualizardatospersonales',
        access: {
            requiredPermissions: ['Administrador','RecursosHumanos','Empleado'],
            requireLogin:true
        }
      })
      .when('/actualizardatosprofesionales', {
        templateUrl: 'views/actualizardatosprofesionales.html',
        controller: 'ActualizardatosprofesionalesCtrl',
        controllerAs: 'actualizardatosprofesionales',
        access: {
             requiredPermissions: ['Administrador','RecursosHumanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/solicitarvacaciones', {
        templateUrl: 'views/solicitarvacaciones.html',
        controller: 'SolicitarvacacionesCtrl',
        controllerAs: 'solicitarvacaciones',
        access: {
             requiredPermissions: ['Administrador','RecursosHumanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/historialvacaciones', {
        templateUrl: 'views/historialvacaciones.html',
        controller: 'HistorialvacacionesCtrl',
        controllerAs: 'historialvacaciones',
        access: {
             requiredPermissions: ['Administrador','RecursosHumanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/historialpagos', {
        templateUrl: 'views/historialpagos.html',
        controller: 'HistorialpagosCtrl',
        controllerAs: 'historialpagos',
        access: {
             requiredPermissions: ['Administrador','RecursosHumanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/generardocumentos', {
        templateUrl: 'views/generardocumentos.html',
        controller: 'GenerardocumentosCtrl',
        controllerAs: 'generardocumentos',
        access: {
             requiredPermissions: ['Administrador'],
             requireLogin:true
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        access: {
             requiredPermissions: [],
             requireLogin:false
        }
      })
      .when('/crearuser', {
        templateUrl: 'views/crearuser.html',
        controller: 'CrearuserCtrl',
        controllerAs: 'crearuser',
        access: {
             requiredPermissions: ['Administrador'],
             requireLogin:true
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

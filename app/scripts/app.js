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
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
         access: {
            requiredPermissions: [],
            requireLogin:false
        }
      })
      .when('/consultardatosempleado', {
        templateUrl: 'views/consultardatosempleado.html',
        controller: 'ConsultardatosempleadoCtrl',
        controllerAs: 'consultardatosempleado',
        access: {
            requiredPermissions: ['Administrador','Recursos Humanos'],
            requireLogin:true
        }
      })
      .when('/actualizardatospersonales', {
        templateUrl: 'views/actualizardatospersonales.html',
        controller: 'ActualizardatospersonalesCtrl',
        controllerAs: 'actualizardatospersonales',
        access: {
            requiredPermissions: ['Administrador','Recursos Humanos','Empleado'],
            requireLogin:true
        }
      })
      .when('/actualizardatosprofesionales', {
        templateUrl: 'views/actualizardatosprofesionales.html',
        controller: 'ActualizardatosprofesionalesCtrl',
        controllerAs: 'actualizardatosprofesionales',
        access: {
             requiredPermissions: ['Administrador','Recursos Humanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/solicitarvacaciones', {
        templateUrl: 'views/solicitarvacaciones.html',
        controller: 'SolicitarvacacionesCtrl',
        controllerAs: 'solicitarvacaciones',
        access: {
             requiredPermissions: ['Administrador','Recursos Humanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/historialvacaciones', {
        templateUrl: 'views/historialvacaciones.html',
        controller: 'HistorialvacacionesCtrl',
        controllerAs: 'historialvacaciones',
        access: {
             requiredPermissions: ['Administrador','Recursos Humanos','Empleado'],
             requireLogin:true
        }
      })
      .when('/historialpagos', {
        templateUrl: 'views/historialpagos.html',
        controller: 'HistorialpagosCtrl',
        controllerAs: 'historialpagos',
        access: {
             requiredPermissions: ['Administrador','Recursos Humanos','Empleado'],
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
      .otherwise({
        redirectTo: '/'
      });
  });

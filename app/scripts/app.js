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
        controllerAs: 'main'
      })
      .when('/consultardatosempleado', {
        templateUrl: 'views/consultardatosempleado.html',
        controller: 'ConsultardatosempleadoCtrl',
        controllerAs: 'consultardatosempleado'
      })
      .when('/actualizardatospersonales', {
        templateUrl: 'views/actualizardatospersonales.html',
        controller: 'ActualizardatospersonalesCtrl',
        controllerAs: 'actualizardatospersonales'
      })
      .when('/actualizardatosprofesionales', {
        templateUrl: 'views/actualizardatosprofesionales.html',
        controller: 'ActualizardatosprofesionalesCtrl',
        controllerAs: 'actualizardatosprofesionales'
      })
      .when('/solicitarvacaciones', {
        templateUrl: 'views/solicitarvacaciones.html',
        controller: 'SolicitarvacacionesCtrl',
        controllerAs: 'solicitarvacaciones'
      })
      .when('/historialvacaciones', {
        templateUrl: 'views/historialvacaciones.html',
        controller: 'HistorialvacacionesCtrl',
        controllerAs: 'historialvacaciones'
      })
      .when('/historialpagos', {
        templateUrl: 'views/historialpagos.html',
        controller: 'HistorialpagosCtrl',
        controllerAs: 'historialpagos'
      })
      .when('/generardocumentos', {
        templateUrl: 'views/generardocumentos.html',
        controller: 'GenerardocumentosCtrl',
        controllerAs: 'generardocumentos'
      })
      .when('/message', {
        templateUrl: 'views/message.html',
        controller: 'MessageCtrl',
        controllerAs: 'message'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

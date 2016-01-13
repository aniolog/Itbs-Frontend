'use strict';

/**
 * @ngdoc directive
 * @name intranetFrontEndApp.directive:login
 * @description
 * # login
 */
angular.module('intranetFrontEndApp')
  .directive('login', function () {
    return {
      templateUrl: 'views/login.html',
      restrict: 'E',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    };
  });

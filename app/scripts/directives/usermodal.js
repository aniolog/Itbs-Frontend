'use strict';

/**
 * @ngdoc directive
 * @name intranetFrontEndApp.directive:usermodal
 * @description
 * # usermodal
 */
angular.module('intranetFrontEndApp')
  .directive('usermodal', function () {
    return {
      templateUrl: 'views/usermodal.html',
      restrict: 'E',
      controller: 'UsermodalCtrl',
      controllerAs: 'usermodal',
      scope: {
  	        	usuario: '=src'
  	        }
    };
  });

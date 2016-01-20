'use strict';

/**
 * @ngdoc directive
 * @name intranetFrontEndApp.directive:newuser
 * @description
 * # newuser
 */
angular.module('intranetFrontEndApp')
  .directive('newuser', function () {
    return {
      templateUrl: 'views/newuser.html',
      controller:'NewuserCtrl',
      controllerAs: 'newuser',
      restrict: 'E'
    };
  });

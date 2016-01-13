'use strict';

/**
 * @ngdoc directive
 * @name intranetFrontEndApp.directive:messages
 * @description
 * # messages
 */
angular.module('intranetFrontEndApp').directive('messages', messages);

  function messages() {
  	    var directive = {
  	        restrict: 'E',
  	        templateUrl: 'views/messages.html',
  	        scope: {
  	        	messages: '=src'
  	        }
  	    };
  	    return directive;
  	}

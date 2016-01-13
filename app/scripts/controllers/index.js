
  'use strict';

  /**
   * Master Controller
   */

   angular.module('intranetFrontEndApp')
   .controller('IndexCtrl', ['$scope', '$cookieStore', 'UserService', IndexCtrl]);

   function IndexCtrl($scope, $cookieStore, userService) {

    $scope.modalShow=function(){
      $('#usermodal').modal('show'); 
    };
    
    $scope.userData=function(){
      return userService.getUserData();
    };

     $scope.isUserLogged = function() {
       return userService.isUserLogged() && userService.isProfileLoaded();
     }

       $scope.logout=function(){
          return userService.logout();
       }

  }

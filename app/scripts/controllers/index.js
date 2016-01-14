
  'use strict';

  /**
   * Master Controller
   */

   angular.module('intranetFrontEndApp')
   .controller('IndexCtrl', 
    ['$scope', '$cookieStore', 'UserService','$rootScope','$location', IndexCtrl]);

   function IndexCtrl($scope, $cookieStore, userService ,$rootScope,$location) {
    $scope.usuario={};

    

    $scope.modalShow=function(){
      $('#usermodal').modal('show'); 
    };
    
    $scope.userData=function(){
      return userService.getUserData();
    };

     $scope.isUserLogged = function() {
       var result=userService.isUserLogged() && userService.isProfileLoaded();
       if(result){
        $scope.usuario= userService.getUserData();
       }
       return result;
     }

       $scope.logout=function(){
          return userService.logout();
       }


       $rootScope.$on( "$routeChangeStart", function(event, next, current) {
           if(next.access.requiredPermissions.length==0){
            return;
           }

            var canAccess=false;
            for (var role=0; role<next.access.requiredPermissions.length;role++){
               if(userService.getUserData().rol.nombre===next.access.requiredPermissions[role]){
                canAccess=true;
                break;
              }
            }
            if((!(canAccess))||(!($scope.usuario.correo))){
              $location.path( "/" );
            }

            console.log(next.$$route.originalPath);
      

       });



  }


  'use strict';

  /**
   * Master Controller
   */

   angular.module('intranetFrontEndApp')
   .controller('IndexCtrl', 
    ['$scope', '$cookieStore', 'UserService','$rootScope','$location','EmpleadoService','vacacionesService', IndexCtrl]);

   function IndexCtrl($scope, $cookieStore, userService ,$rootScope,$location,empleadoService,vacacionesService) {
    $scope.usuario={};
    $scope.empleado={}
    $scope.message={};
    
   $scope.modalShow=function(){
      $('#usermodal').modal('show');
      $scope.empleado=empleadoService.getEmpleado();
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
          $location.path( "/login" );
          return userService.logout();
      }

    $scope.requestClass=function(status){  
    console.log(status);   
    if((status==="Esperando Aprobacion del Supervisor")||(status=="En espera por Aprobacion")){
      return ["progress-bar progress-bar-warning","width: 100%"];
    }/*else if (status==="w"){
      return "progress-bar progress-bar-success";}
    return  {clase:"progress-bar progress-bar-danger",progreso:"width: 100%",titulo:"Rechazada"};*/
        };


    $scope.getTop3vacationRequest=function(){
      return vacacionesService.GetTop3RequestsData();
    }
    $scope.top3Request=function(){
      vacacionesService.GetTop3Requests();
    }

     $scope.isTop3Loading=function(){
      return vacacionesService.isTop3Loading();
    }


     $rootScope.$on( "$routeChangeStart", function(event, next, current) {
       if(next.access.requireLogin){
          if(!(userService.isUserLogged())){
              $location.path( "/login" );

          }
        }

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
        if(!(canAccess)){
            $location.path( "/" );
        }

       });



  }

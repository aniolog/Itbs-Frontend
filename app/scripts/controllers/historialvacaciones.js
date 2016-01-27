'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:HistorialvacacionesCtrl
 * @description
 * # HistorialvacacionesCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp').controller('HistorialvacacionesCtrl',['vacacionesService','$scope',HistorialvacacionesCtrl]);

function HistorialvacacionesCtrl(vacacionesService,$scope) {

  var self=this;
 
  self.currentPage=1;
  self.totalPage=0;
  $scope.Math=Math;

    self.solicitudes=[
        {id:1,fechaInicio:"01/01/2001",fechaFin:"02/02/2002",status:1},
        {id:2,fechaInicio:"01/01/2003",fechaFin:"02/02/2004",status:0},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2005",fechaFin:"02/02/2006",status:-1},
        {id:3,fechaInicio:"01/01/2007",fechaFin:"02/02/2008",status:1}
    ];


    self.init=function(){
      vacacionesService.GetCount();
    }
     self.totalItems=function(){
     
      self.totalPage= Math.floor(2/7)+1 ;
      return vacacionesService.GetRequestCount();
     }

    self.pageChanged=function(){
      console.log(self.currentPage);
    }

    self.prevPage=function(){
      self.currentPage--;
    }
    self.forwPage=function(){
      self.currentPage++;
    }

    self.htmldef=function(reqstatus){
      if(reqstatus===0){
          return {clase:"progress-bar progress-bar-warning",progreso:"width: 50%",titulo:"En Proceso"};
        }
        else if (reqstatus===1){
          return {clase:"progress-bar progress-bar-success",progreso:"width: 100%",titulo:"Aprobada"};
        }
          return  {clase:"progress-bar progress-bar-danger",progreso:"width: 100%",titulo:"Rechazada"};
        };
  }

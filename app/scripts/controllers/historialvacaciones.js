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
 
  self.currentPage=5;
  self.pageSize=10;
  $scope.Math=Math;

    self.init=function(){
      console.log('sdasd');
      vacacionesService.GetCount();
       self.pageChanged();
    }
    self.update=function(){
          self.currentPage=1;
        self.pageChanged();
    }
     self.totalPage=function(){
        var returner=Math.floor(vacacionesService.GetRequestCount()/self.pageSize);
        var mod=(vacacionesService.GetRequestCount()%self.pageSize) ;
        return (returner>0) ?  returner:returner+1 ;

     }

    self.pageChanged=function(){
      vacacionesService.GetRequest(self.pageSize,self.currentPage);
    }

    self.prevPage=function(){
      self.currentPage--;
      self.pageChanged();
    }
    self.forwPage=function(){
      self.currentPage++;
      self.pageChanged();
    }

    self.getRequests=function(){
      return vacacionesService.GetRequestData();
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

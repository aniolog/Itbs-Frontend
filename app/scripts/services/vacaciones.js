'use strict';

/**
 * @ngdoc service
 * @name intranetFrontEndApp.vacaciones
 * @description
 * # vacaciones
 * Service in the intranetFrontEndApp.
 */
angular.module('intranetFrontEndApp').service('vacacionesService', ['$http','BASE_URL',VacacionesService]);

function VacacionesService($http,BASE_URL){
	var self=this;
	self.top3requests=[];
	self.requests=[];
	self.loadingTop3Requests=false;
	self.count=0;


	self.GetCount=function(){

		var error=function(data){
			self.count=0
		}
		var success=function(data){
			self.count=data.data;
		}

		$http.get(BASE_URL + '/vacaciones/count').then(success,error)
	}


	self.GetTop3Requests=function(){

		self.loadingTop3Requests=true;
		self.top3requests=[];

		var error=function(data){
				self.loadingTop3Requests=false;


		}
		var success=function(response){
				self.top3requests=response.data;
				self.loadingTop3Requests=false;

		}
		 $http.get(BASE_URL + '/vacaciones?$top=3').then(success,error)

	}

	self.GetRequest=function(){

	}


	self.GetTop3RequestsData=function(){

		return self.top3requests;
	}

	self.isTop3Loading=function(){
		return self.loadingTop3Requests;
	}

	self.GetRequestCount=function(){
		return self.count;
	}








}
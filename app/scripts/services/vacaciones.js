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
	self.loadingRequests=false;


	self.GetTop3Requests=function(){

		self.loadingTop3Requests=true;
		self.top3requests=[];

		var error=function(data){
				self.loadingRequests=false;
				console.log(self.loadingRequests);


		}
		var success=function(response){
				self.top3requests=response.data;
				self.loadingRequests=false;

		}
		 $http.get(BASE_URL + '/vacaciones?$top=3').then(success,error)

	}


	self.GetTop3RequestsData=function(){

		return self.top3requests;
	}

	self.isTop3Loading=function(){
		console.log('me llamaron');
		return self.loadingTop3Requests;
	}








}
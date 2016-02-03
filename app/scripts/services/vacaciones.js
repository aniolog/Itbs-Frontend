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

	self.GetRequest=function(pageSize,pageNumber){
		var skip=pageSize*(pageNumber-1);
		var reqUrl=BASE_URL + '/vacaciones?$top='+pageSize+'&$skip='+skip;
		console.log(reqUrl);
		$('#loadModal').modal('show');

		var error=function(data){
			  	$('#loadModal').modal('hide');
		}
		var success=function(response){
				self.requests=response.data;
				console.log(response);
				$('#loadModal').modal('hide');

		}
		 $http.get(reqUrl).then(success,error)
	}

	self.PostRequest=function(request,message){
		console.log(request);
		var success=function(data){
			console.log(data.data);
			message.success.push("Solicitud creada con exito, id del ticket:"+data.data);
		}

		var error=function(data){
			message.error.push(data.data.Message);
		}
		var req = {
                    method: 'POST',
                    url: BASE_URL+'/vacaciones/create',
                    data:request
                    };
          console.log(req);
       $http(req).then(success,error);
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

	self.GetRequestData=function(){
		return self.requests;
	}








}
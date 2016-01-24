'use strict';

/**
 * @ngdoc function
 * @name intranetFrontEndApp.controller:CrearuserCtrl
 * @description
 * # CrearuserCtrl
 * Controller of the intranetFrontEndApp
 */
angular.module('intranetFrontEndApp').controller('CrearuserCtrl',['UserService','MessagesFactory',CrearuserCtrl]);

function CrearuserCtrl(userService,MessagesFactory){

	self=this;
	self.email="";
	self.username="";
	self.rol="";

	self.init=function(){
			userService.getPosibleEmails();
	}

	self.notuseremails=function(){
      return userService.getPosibleEmailsList();
    }

    self.submitForm=function(valid){
    	self.messages = MessagesFactory.createMessages();
    	userService.createUser(self.email,self.username,self.rol,self.messages);


    }




}
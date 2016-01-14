'use strict';

(function() {
    angular.module('intranetFrontEndApp').service('UserService', ['$http', 'BASE_URL', UserService]);

    function UserService($http, BASE_URL) {
        var userLogged = false; // Not using rootScope because this object will be a singleton by definition
        var userData={};
        var Users=[];



        this.logout = function(){
          userLogged = false;
		      delete $http.defaults.headers.common['Authorization'];
              var userData={};
        }


        this.login = function(user, messages) {

            var getProfile=function(){
                var MyData=[];
                $http.get(BASE_URL + '/usuarios/perfil?$expand=Rol').success(function(data){                    
                    userData=data[0];                   
                });                
            };

        	var success = function(res) {
            
                // This if should be recorded in sessionStorage if we want "remember me" option
        		if (res.data && res.data.access_token) {
        			// Setting token for future requests
	         		$http.defaults.headers.common['Authorization'] =
	         			'Bearer ' + res.data.access_token;
	         		// Setting user logged for all application
	         		userLogged = true;
        		}
        	};

        	var error = function()	 {
        		messages.error.push('Usuario o contraseña inválido');
        	};
        	$http({
        		method: 'post',
        		url: BASE_URL + '/login',
        		headers: {
                  	'Accept': 'application/json', // Basic frontend:
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        		},
        		data: {
        			'grant_type': 'password',
					    'username': user.email,
					    'password': user.password
        		},
                transformRequest: function(data){
                    return $.param(data);

                }
        	}).then(success, error).then(getProfile);
        };

        this.getUsers=function(){

            $http.get(BASE_URL + '/usuarios').success(function (data){

                Users=data;
            });
        }

        this.isUserLogged = function() {
            return userLogged;
        };

        this.isProfileLoaded = function() {
            return userData.correo;
        };

        this.getUserData = function() {
            return userData;
        };

        this.getUsersList=function(){
            return Users;
        }
      }
    })();

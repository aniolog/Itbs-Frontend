'use strict';

(function() {
    angular.module('intranetFrontEndApp').service('UserService', ['$http', 'BASE_URL','$location', UserService]);

    function UserService($http, BASE_URL,$location) {
        var userLogged = false; // Not using rootScope because this object will be a singleton by definition
        var userProfile={};
        var Users=[];
        var User=[];
        var possibleEmails=[];

        self=this;

        this.getPosibleEmails=function(){
           $http.get(BASE_URL+'/usuarios/emailnotinuse').success(function (data){
                          possibleEmails=data;
            });

        }


        this.getUser=function(userEmail){
            $http.get(BASE_URL+'/usuarios/'+userEmail+'/').success(function (data){
                User=data[0];
            });
        };

        this.logout = function(){
          userLogged = false;
		      delete $http.defaults.headers.common['Authorization'];
              var userData={};
        };


        this.login = function(user, messages) {

            var getProfile=function(){
                var MyData=[];
                $http.get(BASE_URL + '/usuarios/perfil?$expand=Rol').success(function(data){                    
                    userProfile=data[0]; 
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
                    $('#loadModal').modal('hide');
                    $location.path( "/" );

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
        };

        this.updateUser=function(user,employee, messages){
          $('#loadModal').modal('show'); 

            var success = function(data) {
                    messages.success.push('Informacion del usuario modificada con exito');
                    $('#loadModal').modal('hide'); 
            };

            var error = function(msg,code)   {
                     console.log(msg);
                     messages.error.push(msg.data.message);
                     if(message==="Authorization has been denied for this request."){
                        userLogged = false;
                        $location.path( "/" );
                     }
                     $('#loadModal').modal('hide'); 
            };

            var req = {
                    method: 'PUT',
                    url: BASE_URL+'/usuarios/update',
                    data: { 
                         rol:user.rol,
                         correo_e: user.correo,
                         modeloVehiculo: user.modeloVehiculo,
                         colorVehiculo:  user.colorVehiculo,
                         anoVehiculo:    user.anoVehiculo,
                         placaVehiculo:  user.placaVehiculo,
                         correoPersonal: user.correoPersonal,
                         telefono:       employee.telefono+" - "+employee.telefonoCelular,
                         avisar_a:       employee.avisar_a,
                         telf_contact:   employee.telf_contact,
                         direccion:      employee.direccion
                     }
                     };
            $http(req).then(success,error);

        }



         this.createUser=function(email,newusername,messages){
          $('#loadModal').modal('show'); 

            var success = function(data) {
                    email="";
                    messages.success.push('Usuario creado con exito');
                    $('#loadModal').modal('hide'); 
            };

            var error = function(msg,code)   {
                     console.log(msg);
                     $('#loadModal').modal('hide'); 
                      messages.error.push(msg.data.Message);
            };

            var req = {
                    method: 'POST',
                    url: BASE_URL+'/usuarios/create',
                    data: { 
                         rol:{
                            nombre: "Empleado"
                         },
                          usename: newusername,
                          correo:email
                     }
                     };
            $http(req).then(success,error);

        }



        this.isUserLogged = function() {
            return userLogged;
        };

        this.isProfileLoaded = function() {
            return userProfile.correo;
        };

        this.getUserData = function() {
            return userProfile;
        };

        this.getUsersList=function(){
            return Users;
        };

        this.getUserProfile=function(){
            return User;
        };

        this.getPosibleEmailsList=function(){
          return possibleEmails;
        }

      }
    })();

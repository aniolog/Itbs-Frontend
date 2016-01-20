(function() {
    angular.module('intranetFrontEndApp').controller('LoginCtrl', ['UserService', 'MessagesFactory', LoginCtrl]);

    function LoginCtrl(userService, MessagesFactory) {
        var self = this;

        self.user = {};

        self.submitForm = function(isValid) {

            self.messages = MessagesFactory.createMessages();

            if (isValid) {
                userService.login(self.user, self.messages);
                if(userService.isUserLogged()){
                  self.user = {};
                }
            } else {
            	self.messages.error.push('Usuario o contraseña inválido');
            }
        };
    }

})();

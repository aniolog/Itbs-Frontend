'use strict';

(function() {
    angular.module('intranetFrontEndApp').factory('MessagesFactory', [MessagesFactory]);

    function MessagesFactory() {
        return {
            createMessages: function() {
                return {
                    success: [],
                    error: []
                };
            }
        };
    }

})();

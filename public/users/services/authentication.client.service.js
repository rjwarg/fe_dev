// file: authentication.client.service.js
/* global angular */
angular.module('users').factory('Authentication', [
    function(){
        this.user = window.user;
        
        return {
            user: this.user
        };
    }
]);
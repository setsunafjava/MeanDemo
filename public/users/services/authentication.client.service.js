/**
 * Created by DatVT4 on 12/10/15.
 */
angular.module('users').factory('Authentication', [
    function() {
        console.log(window.user);
        this.user = window.user;
        return {
            user: this.user
        };
    }
]);
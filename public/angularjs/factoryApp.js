angular.module('myApp').factory('Authentication', [
    function() {
        console.log(window.user);
        this.user = window.user;
        return {
            user: this.user
        };
    }
]);

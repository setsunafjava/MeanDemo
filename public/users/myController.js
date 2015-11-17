/**
 * Created by Tommy_Phan on 16/11/2015.
 */
angular.module('users').controller('myController', ['$scope','$state','$http','$location','Authentication',
    function($scope,$state,$http,$location,Authentication) {
        console.log(Authentication);
        $scope.authentication = Authentication;
    }
]);
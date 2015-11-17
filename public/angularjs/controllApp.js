/**
 * Created by Tommy_Phan on 14/11/2015.
 */
angular.module('myApp').controller('myControll',['$scope','$window','$state','$http','$location','Authentication',function($scope,$window,$state,$http,$location,Authentication){
    console.log(Authentication);
    $scope.error = $location.search().err;
    $scope.signin = function () {
        $scope.error = null;


        $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
            // If successful we assign the response to the global user model
            $scope.test = response;
            Authentication.user = $scope.test;
            console.log(Authentication);
            // And redirect to the previous or home page

        }).error(function (response) {
            $scope.error = response.message;
        });
    };
}]);
/**
 * Created by Tommy_Phan on 14/11/2015.
 */
angular.module('myApp').controller('myControll',['$scope','$window','$state','$http','$location','Authentication',function($scope,$window,$state,$http,$location,Authentication){
    $scope.authentication = Authentication;

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
        $location.path('/');
    }

    $scope.signin = function () {
        $scope.error = null;

        $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
            // If successful we assign the response to the global user model
            $scope.authentication.user = response;

            // And redirect to the previous or home page
            console.log(Authentication);
            $state.go('login');
        }).error(function (response) {
            $scope.error = response.message;
        });
    };
}]);
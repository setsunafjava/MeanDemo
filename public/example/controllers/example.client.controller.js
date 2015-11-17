/**
 * Created by DatVT4 on 12/10/15.
 */
angular.module('example').controller('ExampleController', ['$scope','Authentication',
    function($scope,Authentication) {
        console.log(Authentication);
        $scope.authentication = Authentication;
    }
]);
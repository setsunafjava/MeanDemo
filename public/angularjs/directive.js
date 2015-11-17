/**
 * Created by Tommy_Phan on 16/11/2015.
 */
angular.module('myApp').directive('lowercase', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (input) {
                return input ? input.toLowerCase() : '';
            });
            element.css('text-transform', 'lowercase');
        }
    };
});
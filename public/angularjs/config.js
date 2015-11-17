/**
 * Created by Tommy_Phan on 16/11/2015.
 */
angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/',
            templateUrl: 'login.html'
        }).state('main',{
            url: '/main',
            templateUrl: 'main.html'
        })

});
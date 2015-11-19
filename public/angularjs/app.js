/**
 * Created by Tommy_Phan on 14/11/2015.
 */
var myApp = angular.module('myApp',['ui.router']);
myApp.config(['$locationProvider',
    function($locationProvider){
        $locationProvider.hashPrefix('!');
    }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

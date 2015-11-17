/**
 * Created by Tommy_Phan on 13/10/2015.
 */

var current_username;
angular.module('LoadingBarExample', ['chieffancypants.loadingBar', 'ngAnimate', 'FBAngular'])
    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    }).factory('socket', function ($rootScope) {
        var socket = io.connect();
        socket.emit('');
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        if (callback) {
                            callback.apply(socket, args);
                        }
                    });
                })
            }
        };
    })

    .controller('ExampleCtrl', ['$scope', '$http', '$timeout', 'cfpLoadingBar', 'Fullscreen', 'socket', function ($scope, $http, $timeout, cfpLoadingBar, Fullscreen, socket) {
        var abc = 'abc';

        socket.on('init', function (data) {
            current_username = data.name;
            $scope.name = data.name;
            $scope.users = data.users;
        });


        $scope.skyleFull = 'glyphicon glyphicon-resize-full';
        $scope.listFriend = [];
        $scope.newMessage = function (user) {
            $scope.listFriend.push("dat: " + user);

        }
        $scope.removeMessage = function () {
            console.log($scope.listFriend.length);
            $scope.listFriend.splice('index', 1);

        }
        $scope.goFullscreen = function () {

            // Fullscreen
            if (Fullscreen.isEnabled()) {
                Fullscreen.cancel();
                $scope.skyleFull = 'glyphicon glyphicon-resize-full';
            }
            else {
                Fullscreen.all();
                $scope.skyleFull = 'glyphicon glyphicon-resize-small';
            }

            // Set Fullscreen to a specific element (bad practice)
            // Fullscreen.enable( document.getElementById('img') )

        };

        $scope.isFullScreen = false;

        $scope.goFullScreenViaWatcher = function () {
            $scope.isFullScreen = !$scope.isFullScreen;
        };
        $scope.start = function () {
            cfpLoadingBar.start();
        };

        $scope.complete = function () {
            cfpLoadingBar.complete();
        }


        // fake the initial load so first time users can see it right away:
        $scope.start();
        $scope.fakeIntro = true;
        $timeout(function () {
            $scope.complete();
            $scope.fakeIntro = false;
        }, 750);

    }]);

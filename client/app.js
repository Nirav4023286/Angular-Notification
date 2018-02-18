var myApp = angular.module('myApp', ['ngRoute', 'ui-notification']);
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/login', {
        templateUrl: './views/login.html',
        controller: 'loginController'
    }).when('/notification', {
        templateUrl: './views/notification.html',
        controller: 'notificationController'
    });
});
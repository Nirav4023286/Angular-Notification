myApp.controller('loginController', function($rootScope, $scope) {

    $rootScope.name;
    $scope.name;
    $scope.submit = function() {
        $rootScope.name = $scope.name.toUpperCase();
        console.log($rootScope.name);
    };
});
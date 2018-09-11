var controllers = angular.module("Controllers");
controllers.controller("main", ['$scope', '$cookies','$location', 'auth', 'Admin', 'Candidat', function ($scope, $cookies,$location, auth, admin, candidat) { 
    $scope.data = { };
    $scope.state = {};
    $scope.state.state = $cookies.get('current') != "" && $cookies.get('current') != null;
    $scope.data.password = "test";
    $scope.data.email = "test@test.test";
    $scope.logInfo = {};
    $scope.logInfo.loginType = "candidat";
    $scope.$watch("logInfo.loginType", function (newVal, oldVal) { 
        auth.currentLoginType = newVal;
    });
    $scope.profile = function () { 

        if ($cookies.get('current') == 'admin')
            $location.path('aProfile')
        else if ($cookies.get('current') == 'candidat')
            $location.path('cProfile')





    }
    $scope.login = function () { 
        auth.login($scope.data, $scope);


    }


    $scope.logout = function () { 
        auth.logout($scope);
    }




}]);

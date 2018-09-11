var controllers = angular.module("Controllers");
controllers.controller("CreateTestController", ["$scope", "$location", "CreateTestService",'Admin', function ($scope, $location, cts,admin) {
    if (admin.isAuthenticated())
        { 
    $scope.test = {};
    $scope.create = function () {
        if ($scope.myform.$valid) {
            cts.test = $scope.test;
            $location.path('/createQuestions');
        } 


    }
        }
    else 
        $location.path("/");





}])

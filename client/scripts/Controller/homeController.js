var controllers = angular.module("Controllers");
controllers.controller("homeController", ['$scope','$cookies','auth','Admin','Candidat', function ($scope, $cookies,auth,admin,candidat) { 
    $scope.signType = "candidat";
    $scope.signError = false;
    $scope.isAuthCan=candidat.getCurrentId(); 
        $scope.isAuthAdm=admin.getCurrentId();
   

    $scope.$watch("signType", function (newVal, oldVal) { 
        auth.currentSignType = newVal;
    });
    $scope.sign = function () {
        auth.sign($scope.dataregistre, $scope);
    }



}])

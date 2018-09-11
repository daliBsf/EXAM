var controllers = angular.module("Controllers");

controllers.controller("profileController", ['$scope', '$location', '$cookies', 'auth', 'Admin', 'Examen', function ($scope, $location, $cookies, auth, admin, examen)
    { 
        var getAllExams = function () { 
            return admin.examens({
                id: admin.getCurrentId()
            }, function (response) {
                $scope.exams = response;
                $scope.assign = function (id) { 

                    $location.path('/assign/' + id);

                }
            }, function (header) {
                $location.path("/")
            });
        }
        getAllExams();
        $scope.createTest=function(){ 
        
        $location.path('/createTest');
        
        }
       

                }]);

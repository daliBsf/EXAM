var controllers = angular.module('Controllers');
controllers.controller('PasserTestController', ['$scope', '$location', '$routeParams', 'CreateTestService', 'Candidat', 'Examen', 'CandidatExamen', function ($scope, $location, $routeParams, cts, can, exam, ce) {

    if (can.isAuthenticated()) {
        exam.findById({
            'id': $routeParams.id
        }, function (examen) {
            $scope.examen=examen;
            exam.questions({ 
                'id': $routeParams.id
            }, function (response) {
                $scope.questions = response;
                $scope.responses = [];
                $scope.tabs = [];
                for (var i = 0; i < response.length; i++) { 

                    $scope.tabs.push({
                        title: "Question " + (i + 1)
                    });

                }
            }, function (header) {
                console.log(header.status)
            });
        }, function (header) {
            console.log(header.status)
        });

        $scope.$on('timer-stopped', function (event, data){
                $scope.confirm();
            });
        /*

        

        $scope.test = true;
        var selected = null,
            previous = null;*/
        $scope.selectedIndex = 0;
        $scope.next = function () { 
            $scope.selectedIndex++;


        }
        $scope.previous = function () { 
            $scope.selectedIndex--;


        }
        /* $scope.create = function () {
             var data = {};
             data.question = $scope.questions;
             data.examen = cts.test;
             data.examen.adminId = admin.getCurrentId();
             cts.create(data);




         }*/
        $scope.confirm = function () { 
            ce.updateAll({
                where: {
                    'candidatId': can.getCurrentId(),
                    'examenId': $routeParams.id

                }
            }, {
                'responses': $scope.responses,
                'state': true
            }, function (res) {
                console.log(res);
            }, function (header) {
                console.log(header.status);
            });
            $location.path('/cProfile');




        }
    } else
        $location.path("/");


    }]);

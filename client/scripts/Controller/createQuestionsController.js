var controllers = angular.module('Controllers');
controllers.controller('CreateQuestionController', ['$scope','$location', 'CreateTestService', 'Admin', function ($scope,$location, cts, admin) {
    $scope.questions = [];


    if (admin.isAuthenticated()) { 

        for (var i = 0; i < cts.test.nbQuest; i++) {
            $scope.questions[i] = {};
            $scope.questions[i].choix = [];
        }
        var tabs = [];

        //cts.test.nbQuest=6;
        for (var i = 0; i < cts.test.nbQuest; i++) { 

            tabs[i] = {
                title: "Question " + (i + 1)
            }

        }

        $scope.test = true;
        var selected = null,
            previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
        $scope.next = function () { 
                $scope.selectedIndex++;


        }
        $scope.previous = function () { 
            $scope.selectedIndex--;


        }
        $scope.create = function () {
            var data = {};
            data.question = $scope.questions;
            data.examen = cts.test;
            data.examen.adminId = admin.getCurrentId();
            cts.create(data);




        }
    } else
        $location.path("/");


    }]);

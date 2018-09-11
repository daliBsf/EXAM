var controllers = angular.module("Controllers");

controllers.controller("cProfileController", ['$scope', '$location', '$cookies', '$http', '$mdDialog', 'auth', 'Candidat', 'Examen', 'CandidatExamen', function ($scope, $location, $cookies, $http, $dialog, auth, candidat, examen, candExam)
    { 


        if ($cookies.get('current') != 'candidat')
            $location.path("/");
        else { 
            $scope.exams = [];

            $scope.result = function (id) {
                $http.post('/resultat', { 
                    examenId: id,
                    candidatId: candidat.getCurrentId()
                }).then(function (response) { 
                    $dialog.show(
                        $dialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('SCORE')
                        .textContent("Your score is " +response.data.score)
                        .ariaLabel('Alert Score')
                        .ok('OK')
                    );

                    console.log(response.data)
                }, function (response) { 
                    console.log(response)
                });





            }

            function getAllExams() { 
                candExam.find({
                    filter: {
                        where: {
                            candidatId: candidat.getCurrentId()
                        },
                        include: 'examen' 
                    }
                }, function (response) {
                    response.forEach(function (value) {
                        $scope.exams.push(value);

                    });
                    $scope.passer = function (id) { 
                        $location.path("/passerTest/" + id);
                    }
                }, function (header) {
                    $location.path("/");
                    console.log(header.status);
                });


            }
            getAllExams();


        }
                }]);

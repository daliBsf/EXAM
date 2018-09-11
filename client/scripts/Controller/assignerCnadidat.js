var controllers = angular.module('Controllers');
controllers.controller('AssignerCandidatController', ['$scope', '$routeParams', '$location', 'Admin', 'Examen', 'Candidat', function ($scope, $routeParams, $location, admin, exam, candidat) { 
    if (admin.isAuthenticated()) { 
        $scope.candidats = [];
        $scope.add = function () {
            $scope.candidats.push({
                email: "test@test.com"
            });



        }
        $scope.delete = function (index) { 
            $scope.candidats.splice(index, 1);

        }
        $scope.confirm = function () {
            $scope.candidats.forEach(function (val) {
                var c = candidat.findOne({
                    filter: {
                        where: {
                            email: val.email
                        }
                    }
                }, function (value) {
                    // c.$promise.then(function (response) {
                    //console.log(response);
                    exam.candidats.link({ 
                        'id': $routeParams.id,
                        'fk': value.id
                    }, {
                        'data': {
                            'state': false
                        }
                    }, function (value, header) {
                        console.log(value);
                    }, function (header) {
                        console.log("error " + header);
                    });
                    //.$promise.then(function(response){ console.log(response)});

                     
                }, function (header) {
                    console.log("error " + header)
                });

                //console.log(c);


            });

        }
    } else $location.path("/");



}])

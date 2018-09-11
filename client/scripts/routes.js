var routes = angular.module("Routes", ['ngRoute']);
routes.config(function ($routeProvider) { 
    $routeProvider.when('/', {
            templateUrl: "../views/index.html",
            controller: "homeController"
        })
        .when('/aProfile', { 
            templateUrl: "../views/profile.html",
            controller: "profileController"
        })
        .when('/cProfile', {
            templateUrl: "../views/cProfile.html",
            controller: "cProfileController"
        })
        .when("/createTest", { 
            templateUrl: "../views/createTest.html",
            controller: "CreateTestController"
        })
        .when('/createQuestions', {
            templateUrl: "../views/createQuestions.html",
            controller: "CreateQuestionController"
        })
        .when('/assign/:id', { 
            templateUrl: "../views/assignerCandidat.html",
            controller: "AssignerCandidatController"
        })
        .when('/passerTest/:id', {
            templateUrl: "../views/passerTest.html",
            controller: "PasserTestController"
        })
        .otherwise({
            templateUrl: "../views/404.html"
        });

});

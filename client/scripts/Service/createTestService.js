var services = angular.module("Services");
services.factory("CreateTestService", ["Examen", function (exam) { 

    var fac = { };
    fac.test = {};
    fac.create = function (data) {

        exam.createExamen(data, function (response) { 
            console.log(response);


        })

    }









    return fac;



}])

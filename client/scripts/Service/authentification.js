var services = angular.module("Services");
services.factory("auth", ['Candidat', 'Admin', '$location', '$cookies', '$mdToast', function (can, admin, $location, $cookies, $mdToast) { 
    var service = { };
    //service.state = "disconnected";
    service.currentLoginType = "";
    service.currentSignType = "";
    service.login = function (user, $scope) { 
        if (service.currentLoginType == "admin") { 
           var rt= admin.login(user, function (response) { 
                service.currentAdminId=response.user.id; 
                $scope.state.state = "true";
                $location.path('/aProfile');
                $cookies.put('current', "admin");
                $cookies.put('state', true);

                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Login success')
                    .position("top right")
                    .hideDelay(3000)
                );
            }, function (error) { 
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Login failure')
                    .position("top right")
                    .hideDelay(3000)
                );
            });

        } else if (service.currentLoginType == "candidat") { 
            service.current = can.login(user, function (response) { 
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Login success')
                    .position("top right")
                    .hideDelay(3000)
                );
                $scope.state.state = "true";
                $cookies.put('current', "candidat");
                $cookies.put('state', true);
                $location.path('/cProfile');
            }, function (error) {
                $scope.errorLogin = "true";
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Login failure')
                    .position("top right")
                    .hideDelay(3000)
                );
            });
        }
    }
    service.logout = function ($scope) { 
        if ($cookies.get('current') == "admin") { 
            admin.logout();
            $scope.state.state=false;
            $cookies.put('state', false);
            $cookies.put('current',"");
            $location.path("/");
            $mdToast.show(
                $mdToast.simple()
                .textContent('Goodbye')
                .position("top right")
                .hideDelay(3000)
            );
        } else if ($cookies.get('current') == "candidat") {
            can.logout();
            $cookies.put('current',"");
            $scope.state.state=false;
            $cookies.put('state', false);
            $location.path("/");
            $mdToast.show(
                $mdToast.simple()
                .textContent('Goodbye')
                .position("top right")
                .hideDelay(3000)
            );
        } else
            console.log("not connected");

    }
    service.sign = function (data, $scope) { 
        if (service.currentSignType == "admin") { 
            admin.create(data, function (response) {
                console.log("sign success");
            }, function (error) {
                $scope.errorSign = true;
                console.log("sign failure");
            });

        } else if (service.currentSignType = "candidat") { 
            can.create(data, function (response) { 
                console.log("signIn success");
                $mdToast.show(
                $mdToast.simple()
                .textContent('signIn success')
                .position("top right")
                .hideDelay(3000))
            }, function (error) { 
                $scope.errorSign = true;
                console.log("signIn failure");
                    $mdToast.show(
                $mdToast.simple()
                .textContent('signIn failure')
                .position("top right")
                .hideDelay(3000))
            });
        }
    }

    return service;
}]);

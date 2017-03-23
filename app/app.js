(function(angular){

    var app = angular.module("movie",["ngRoute","movie.home","movie.detail","movie.list","totop","lazy","brief"]);

    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.otherwise("/home_page");

    }])

    app.controller("searchCtrl",["$scope","$location",function($scope,$location){
        $scope.submit = function(search){
            if(search)
                return
            $location.url("/search?q="+ $scope.search || search);
        }


    }])




})(angular)
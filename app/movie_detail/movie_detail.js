(function(angular){

    var app = angular.module("movie.detail",["ngRoute","movie.service"]);

    app.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/subject/:id",{
                templateUrl:"movie_detail/view.html",
                controller:"movie_detail_ctrl"
            })
        }])

    app.controller("movie_detail_ctrl",["$scope","jsonp_service","$routeParams","$route",function($scope,jsonp_service,$routeParams,$route){
        console.log($routeParams)
        $scope.isShow = true;

        jsonp_service.myJsonp("https://api.douban.com/v2/movie/subject/"+$routeParams.id,{},function(data){
            console.log(data);
            $scope.data = data;
            $scope.isShow=false;
            $scope.$apply();
        })

    }])


})(angular)
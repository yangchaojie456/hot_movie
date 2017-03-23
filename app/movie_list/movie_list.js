(function(angular){

    var app = angular.module("movie.list",["ngRoute","movie.service"]);

    app.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/:movie_list/:page?",{
                templateUrl:"movie_list/view.html",
                controller:"movie_list_ctrl"
            })
        }])

    app.controller("movie_list_ctrl",["$scope","jsonp_service","$routeParams","$route","$location",function($scope,jsonp_service,$routeParams,$route,$location){
        console.log($routeParams)
        var type = null;
        // 当前页 page
        $scope.page = $routeParams.page || 1;
        var count = 24;
        // 开始获取数据的位置
        var start = ($scope.page-1)*count;
        var totalPage = 0;
        switch($routeParams.movie_list){
            case "top250":
                type="top250";
            break;
            case "in_theaters":
                type="正在热映";
            break;
            case "coming_soon":
                type="即将上映";
            break;
            case "search":
                type="搜索结果";
            break;
        }
        $scope.type= type;
        $scope.isShow= true;
        jsonp_service.myJsonp("https://api.douban.com/v2/movie/"+$routeParams.movie_list,{q:$routeParams.q,start:start,count:count},function(data){
            var total = data.total;
            totalPage = Math.ceil(total/count);
            $scope.isShow = false;
            console.log(data);
            $scope.data = data;
            $scope.$apply();
        })

        $scope.go = function(page){
            if(page>totalPage || page<=0){
                return
            }
            $route.updateParams({page:page});


        }



    }])
})(angular)
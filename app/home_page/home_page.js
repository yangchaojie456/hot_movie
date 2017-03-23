(function(angular,jQuery){

    var app = angular.module("movie.home",["ngRoute",'movie.service']);

    app.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/home_page",{
                templateUrl:"home_page/view.html",
                controller:"home_page_ctrl"
            })
        }])

    app.controller("home_page_ctrl",["$scope","jsonp_service",function($scope,jsonp_service){
        $scope.prev = function(){
            $('.carousel').carousel('prev')
        }
        $scope.next = function(){
            $('.carousel').carousel('next')
        }

        jsonp_service.myJsonp("http://api.douban.com/v2/movie/in_theaters",{count:12},function(data){
            console.log(data);
            $scope.data_in_theaters = data;

            $scope.$apply();
        })
        jsonp_service.myJsonp("http://api.douban.com/v2/movie/coming_soon",{count:12},function(data){
            // console.log(data);
            $scope.data_coming_soon= data;

            $scope.$apply();
        })
        jsonp_service.myJsonp("http://api.douban.com/v2/movie/top250",{count:12},function(data){
            // console.log(data);
            $scope.data_top250 = data;

            $scope.$apply();
        })

        var $ = jQuery;
        var in_theaters_left = 0;
        var window_width = 0;
        $(window).resize(function(event) {
            /* Act on the event */
            window_width= $(window).width();
            var row_no_view = 3000 - window_width;
            console.log(row_no_view);

            scroll_bar($('#in_theaters'),row_no_view);
            scroll_bar($('#coming_soon'),row_no_view);
            scroll_bar($('#top250'),row_no_view);

        });

        $(window).resize();

        function scroll_bar(obj,row_no_view){
            obj.find('.left').hover(function() {
                /* Stuff to do when the mouse enters the element */
                var left = Math.abs(parseInt(obj.find('.row').css("left")))  ;
                console.log(left)
                console.log(left/row_no_view)
                obj.find('.row').animate({left:0}, 10000*(left/row_no_view),'linear');

            }, function() {
                /* Stuff to do when the mouse leaves the element */
                obj.find('.row').stop();
            });

            obj.find('.right').hover(function() {
                /* Stuff to do when the mouse enters the element */

                var left = Math.abs(parseInt(obj.find('.row').css("left")));
                console.log((row_no_view-left)/row_no_view);
                obj.find('.row').animate({left:-row_no_view}, 10000*(row_no_view-left)/row_no_view,'linear');

            }, function() {
                /* Stuff to do when the mouse leaves the element */
                obj.find('.row').stop();
            });
        }

    }])
})(angular,jQuery)
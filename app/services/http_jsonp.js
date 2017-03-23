
(function(angular){
    var app = angular.module("movie.service",[]);

    app.service("jsonp_service",["$window",function($window){
        this.myJsonp = function(url,params,fn){
            // 参数是一个对象，拼接成相应字符串
            var str = "";
            for(var k in params){
                str += k + "=" +params[k] + "&";
            }

            var callback_name = "callback_"+new Date().getTime();

            var jsonp_script = document.createElement("script");

            jsonp_script.src = url + "?" + str +"callback="+callback_name;

            $window[callback_name] = function(data){
                fn(data);
            }

            $window.document.body.appendChild(jsonp_script);

        }
    }]);
})(angular)
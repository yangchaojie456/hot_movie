(function(angular){
    var app = angular.module("lazy",[]);

    app.directive("lazyload",function(){
        return {
            link:function(scope,element,attrs){
                angular.element(window).on('scroll', function() {
                // 计算距离 切换img属性
                    // console.log(element);
                    if(angular.element(window).scrollTop()+angular.element(window).height()>getH(element[0])){

                        var src = element[0].getAttribute("data-original");
                        element[0].setAttribute("src",src);
                    }


                });
            }
        }
    })

    //获得对象距离页面顶端的距离
    function getH(obj) {
        var h = 0;

        while (obj) {
            h += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return h;
    }
})(angular)
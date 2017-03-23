(function(angular,jQuery){

    var app = angular.module("totop",[]);
    var $ = jQuery;

    app.directive("toTop",function(){
        return {
            link:function(scope,element,attrs){
                $(element).click(function(event) {
                    /* Act on the event */
                    console.log(1);
                    $(window).scrollTop(0);
                });
            }
        }
    })


})(angular,jQuery)
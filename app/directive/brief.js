(function(angular,jQuery){
    var app = angular.module("brief",["movie.service"]);
    var $ = jQuery;
    app.directive("brief",["jsonp_service",function(jsonp_service){
            return {
                link:function(scope,element,attrs){

                    // 计算距离 切换img属性
                        // console.log(element);
                            // 先注掉 要不 太浪费请求了

                            // jsonp_service.myJsonp("https://api.douban.com/v2/movie/subject/"+attrs.movieid,{},function(data){
                            //     console.log(data);
                            //     $(element).click(function(event) {
                            //         /* Act on the event */
                            //         console.log(1);
                            //     });

                            //     $(element).popover({
                            //         html:true,
                            //         placement:"right auto",
                            //         title:data.title,
                            //         content:"<div><h4>影片简介：</h4><p>"+data.summary+"</p></div>",
                            //         trigger:"hover"
                            //     })
                            // })



                }
            }
        }])


})(angular,jQuery)
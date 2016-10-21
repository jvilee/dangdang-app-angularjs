app.factory('commonService',['$http',function($http){
    var service = {}
    service.getData  = function(type, callbBack) {
        $http({
            url:'/dangdang-app-angularjs/data/book_'+type+'.json',
            method:'get'
        })
        .then(function(res){
            console.log('获取数据成功')
            callbBack(res)
        }),function(err){
            console.dir(err)
        }
    }
    return service
}])
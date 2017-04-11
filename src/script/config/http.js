'use strict';
//利用装饰器修改http服务
angular.module('app').config(['$provide', function($provide) {
    $provide.decorator('$http', ['$delegate', '$q', function($delegate, $q) {
        //$delegate此时指代$http,将http的post请求转化为get请求。
        $delegate.post = function(url, data, config) {
            var def = $q.defer();
            $delegate.get(url).success(function(resp) {
                def.resolve(resp);
            }).error(function(err) {
                def.reject(err);
            });
            return {
                success: function(cb) {
                    def.promise.then(cb);
                },
                error: function(cb) {
                    def.promise.then(null, cb);
                }
            }
        }
        return $delegate;
    }]);
}]);

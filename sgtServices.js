app.config(function($httpProvider){
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded'}
});



app.factory('sgtService', function($http, $q, $log){
    var self = this;

    self.baseUrl = 'http://s-apis.learningfuze.com/sgt/';

    self.apiKey = 'Yd2V1lB6e5';

    self.dataFromServer = [];

    self.httpRequest = function(url, data){

        return $http({
            url: url,
            data: $.param(data),
            method: 'POST',
            dataType: 'json',
            cache: false
        });
    };

    self.getData = function(){
        var url = self.baseUrl + 'get';
        var sendData = {'api_key': self.apiKey};
        var defer = $q.defer();

        self.httpRequest(url, sendData).then(function(resp){
            $log.info('Data received', resp);
            self.dataFromServer = resp;
            defer.resolve(resp.data.data);

        }, function(err){
            $log.warn('Error getting data:', err);
            defer.reject(err);

        });

        return defer.promise;
    };

    return self;
});
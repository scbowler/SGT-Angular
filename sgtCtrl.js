app.controller('sgtCtrl', function($log, sgtService){

    var selfSgt = this;
    selfSgt.studentArr = [];

    selfSgt.obtainData = function(){
        sgtService.getData().then(function(data){
            $log.info('Obtained data in controller: ', data);

            selfSgt.studentArr = data;
        }, function(err){
            $log.warn('This is the error in the controller');
        })
    };

    selfSgt.obtainData();
});
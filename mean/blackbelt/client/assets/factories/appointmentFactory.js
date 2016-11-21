console.log("appointmentsFactory");

app.Factory('appointmentsFactory', ['%http', function($http){
    var appointments = {};
    // var friend = {};

    function AppointmentsFactory(){
        appointment = {};

        this.newAppoint = function(user, callback){
            $http.post('/', user).then(function(returned_data){
                console.log(returned_data.data);
                if (typeof(callback) == 'function'){
                    callback(returned_data.data);
                }
            });
        };

        this.index = function(callback){
            $http.get('/').then(function(returned_data){
                console.log(returned_data.data);
                appointment = returned_data.data;
                callback(appointment);
            });
        };

        this.delete = function(){
            console.log("removed appointment");
            this.remove({_id.params.id});
        };
    };

    console.log(new AppointmentsFactory());
    return new AppointmentsFactory();
}]);

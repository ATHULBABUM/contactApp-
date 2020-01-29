var app=angular.module('myApp',[]);
app.controller("appControl",function($scope,$http){

    var refresh = function(){
        $http.get('/contactlist').then(function(response){
            console.log("I got data i requested");
            $scope.contactList = response.data;
        },function(error){
            console.log(error);
        });
    } 
    refresh();
    
    $scope.addContact =  function(){
        $http.post('/contactlist',$scope.contact).then(function(response){
            console.log("data submitted");
        },function(error){
            console.log(error);
        });
        refresh();
    }

    $scope.remove=function(id){
        console.log(id);
        $http.delete('/contactlist/'+id).then(function(response){
            console.log("data deleted");
        },function(error){
            console.log(error);
        });
        refresh();
    }
})

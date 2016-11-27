var app = angular.module('myapp',[]);

app.controller("myController",function($scope,$http){

    var refresh = function(){
        $http.get("/contactlist").success(function(response){
            //console.log(response);
            $scope.contactlist = response;
            $scope.contact="";
        });
    };

 refresh();

    $scope.addContact = function(){
        //console.log($scope.contact);  
        $http.post("/contactlist",$scope.contact).success(function(response){
             console.log(response);
             refresh();
         });
    };

    $scope.removeContact = function(id){
       // console.log(id); 
       $http.delete("/contactlist/" + id).success(function(response){
             console.log(response);
             refresh();
         });
    };

    $scope.editContact = function(id){
       // console.log(id); 
       $http.get("/contactlist/"+id).success(function(response){
         //console.log(response);
            $scope.contact = response;
        });
    };

    $scope.updateContact = function(){
        console.log($scope.contact._id); 
        var id = $scope.contact._id;

        $http.put("/contactlist/"+id,$scope.contact).success(function(response){
            $scope.contactlist = response;
            refresh();
        });
    };

});
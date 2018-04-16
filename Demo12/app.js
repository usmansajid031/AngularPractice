(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope,$http){
        
        $scope.title="";
        $scope.movie=null;
        
        var onSuccess = function(response){
            $scope.movie=response.data;
        }
        
        var onError=function(error){
            alert(error);
        }
        
        $scope.getData= function(){
            var url = "http://www.omdbapi.com/?t=TITLE&y=&plot=full&r=json";
            url =url.replace("TITLE", $scope.title);
            
            $http.get(url).then(onSuccess, onError);
        };
    
    });
    
    
})();
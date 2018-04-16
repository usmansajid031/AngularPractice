(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope){
        
        $scope.message="";
        $scope.test=function(){
            alert($scope.message);    
        };
        
    });
    
})();
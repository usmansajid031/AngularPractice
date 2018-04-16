(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope){
        
        $scope.firstNum=0;
        $scope.secondNum=0;
    
    });
    
    app.filter("strToNum", function(){
        return function(input){
            return parseInt(input,10);
        }
    });
    
})();
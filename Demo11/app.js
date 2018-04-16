(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope){
        
        $scope.count=10;
    
    });
    
    app.run(function($rootScope){
        $rootScope.count=30;
    });
    
  
    
})();
(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope){
        
        $scope.name="Usman Sajad";
        $scope.empcount="34567";
        $scope.price="2300";
        $scope.student= new Object();
        $scope.student.id=1;
        $scope.student.name="Usman Sajad";
        
    });
    
})();
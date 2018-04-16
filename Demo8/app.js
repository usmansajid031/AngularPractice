(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope){
        
        $scope.mySortOrder="ID";
        $scope.nametofilter="";
        
        $scope.setOrder=function(v){
            $scope.mySortOrder=v;
        };
        
        $scope.students=[];
        
        $scope.students.push({ 'ID': 1, 'Name': 'Usman'});
        $scope.students.push({ 'ID': 2, 'Name': 'Aun'});
        $scope.students.push({ 'ID': 3, 'Name': 'Ali'});
        $scope.students.push({ 'ID': 4, 'Name': 'Umar'});
        
        
    });
    
})();
(function(){
    
    var app=angular.module("BSModule",[]);
    app.controller("TestCtrl", function($scope){
        $scope.data={'ID': 1, 'Name': 'Usman'};
    });
    
    app.directive("myCustom", function(){
        
        return{
            //restrict: "E", // Element (Default)
            //restrict: "A", // Attribute (Default)
            //restrict: "C", // For Class
            restrict: "M", // for comment
            replace: true,
            template: "<h1>Custom Directive Here</h1>"
        };
    });
    
    app.directive("displayData", function(){
        return {
            template: "<div><p>ID: {{data.ID}}</p><p>Name:{{data.Name}}</p></div>"
        };
    });
    
    app.directive("displayData2", function(){
        return {templateUrl: 'test.html'};
    });
    
    
    
})();
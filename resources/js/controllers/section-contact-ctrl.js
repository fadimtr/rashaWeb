(function(){
    angular.module('myApp').controller('sectionContactCtrl',function($scope,$location,$anchorScroll,$timeout){
        $scope.submit = function(data){
            console.log('data submitted : ' + data);
        }
    })
}())
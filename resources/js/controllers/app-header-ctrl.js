(function(){
    angular.module('myApp').controller('appHeaderCtrl',function($scope,$location,$anchorScroll,$timeout,$http,$q,$resource){
        $scope.links = [
            {id:'whyUs' ,prevName:'Why Us?',sectionName:'section-best'},
            {id:'projects' ,prevName:'Our Projects',sectionName:'section-projects'},
            {id:'offices' ,prevName:'Our Offices',sectionName:'section-offices'},
            {id:'app' ,prevName:'Our App!',sectionName:'section-app'}
        ]
        
        $scope.buttons = [
            {prevName:'Contact Us',sectionName:'section-contact'},
            {prevName:'Show More',sectionName:'section-best'}
        ]
        $scope.title = '';
        
        $scope.scrollTo = function(link){
            $timeout(function() {
            $location.hash(link.sectionName);
            $anchorScroll();
            });
            
        }
        
//        $scope.getTitle = function(){
//            var resource = $resource('https://jsonplaceholder.typicode.com/posts/1');
//            resource.get(function(result){
//                console.log(result);
//            });
//            
//        };
//        $scope.getTitle();
//        
//        $scope.tryAsync = function(){
//            var promise = $scope.getTitle();
//            promise.then(function(result){
//                console.log('promise done');
//                console.log(result);
//            })
//            console.log('i will not wait for this fuckin promise');
//        }
//        
//        $scope.tryAsync();
    })
}())
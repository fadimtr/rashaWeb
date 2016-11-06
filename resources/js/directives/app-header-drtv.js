(function(){
    angular.module('myApp').directive('appHeader', function($sce,$timeout,$location,$anchorScroll){
        return {
            restrict:'AEC',
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/app-header-tmpl.html'),
            controller : function($scope){
                $scope.links = [
                    {id:'whyUs' ,prevName:'Why Us?',sectionName:'section-best'},
                    {id:'projects' ,prevName:'Our Projects',sectionName:'section-projects'},
                    {id:'offices' ,prevName:'Our Offices',sectionName:'section-offices'},
                    {id:'app' ,prevName:'Our App!',sectionName:'section-app'}
                ]

                $scope.buttons = [
                    {prevName:'Contact Us',sectionName:'section-contact'},
                    {prevName:'Show More',sectionName:'section-best'}
                ];
                
                $scope.title = '';

                $scope.scrollTo = function(link){
                    $timeout(function() {
                    $location.hash(link.sectionName);
                    $anchorScroll();
                    });

                }
            }
        }
    }) 
}())
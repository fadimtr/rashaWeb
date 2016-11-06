(function(){
    angular.module('myApp').directive('sectionProjects', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/section-projects-tmpl.html'),
            controller: function($scope,projectsService){
                $scope.parts = projectsService.getParts();
            }
        }

    })  
}())
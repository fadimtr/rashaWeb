(function(){
    angular.module('myApp').directive('sectionProjects', function(){
        return {
            controller: 'sectionProjectsCtrl',
            templateUrl : 'resources/js/templates/section-projects-tmpl.html'
        }

    })  
}())
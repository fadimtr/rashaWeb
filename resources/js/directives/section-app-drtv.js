(function(){
    angular.module('myApp').directive('sectionApp', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/section-app-tmpl.html')
        }

    })  
}())
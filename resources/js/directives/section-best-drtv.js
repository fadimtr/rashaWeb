(function(){
    angular.module('myApp').directive('sectionBest', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/section-best-tmpl.html')
        }

    })  
}())
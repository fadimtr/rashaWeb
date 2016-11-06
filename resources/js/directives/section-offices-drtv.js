(function(){
    angular.module('myApp').directive('sectionOffices', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/section-offices-tmpl.html')
        }

    })  
}())
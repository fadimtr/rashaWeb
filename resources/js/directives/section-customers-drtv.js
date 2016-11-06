(function(){
    angular.module('myApp').directive('sectionCustomers', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/section-customers-tmpl.html')
        }

    })  
}())
(function(){
    angular.module('myApp').directive('appFooter', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/app-footer-tmpl.html')
        }

    }) 
}())
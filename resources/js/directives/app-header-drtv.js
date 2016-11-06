(function(){
    angular.module('myApp').directive('appHeader', function($sce){
        return {
            restrict:'AEC',
            controller: 'appHeaderCtrl',
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/app-header-tmpl.html')
        }
    }) 
}())
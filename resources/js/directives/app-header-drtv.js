(function(){
    angular.module('myApp').directive('appHeader', function(){
        return {
            restrict:'AEC',
            controller: 'appHeaderCtrl',
            templateUrl : 'resources/js/templates/app-header-tmpl.html'
        }
    }) 
}())
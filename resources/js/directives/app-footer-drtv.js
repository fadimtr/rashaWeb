(function(){
    angular.module('myApp').directive('appFooter', function(){
        return {
            controller: 'appFooterCtrl',
            templateUrl : 'resources/js/templates/app-footer-tmpl.html'
        }

    }) 
}())
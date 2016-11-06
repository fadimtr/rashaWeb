(function(){
    angular.module('myApp').directive('sectionBest', function(){
        return {
            controller: 'sectionBestCtrl',
            templateUrl : 'resources/js/templates/section-best-tmpl.html'
        }

    })  
}())
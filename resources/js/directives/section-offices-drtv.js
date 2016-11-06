(function(){
    angular.module('myApp').directive('sectionOffices', function(){
        return {
            controller: 'sectionOfficesCtrl',
            templateUrl : 'resources/js/templates/section-offices-tmpl.html'
        }

    })  
}())
(function(){
    angular.module('myApp').directive('sectionCustomers', function(){
        return {
            controller: 'sectionCustomersCtrl',
            templateUrl : 'resources/js/templates/section-customers-tmpl.html'
        }

    })  
}())
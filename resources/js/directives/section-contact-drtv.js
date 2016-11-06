(function(){
    angular.module('myApp').directive('sectionContact', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/section-contact-tmpl.html'),
            controller: function($scope){
                        $scope.submit = function(data){
                            console.log('data submitted : ' + data);
        }
            }
        }

    })      
}())
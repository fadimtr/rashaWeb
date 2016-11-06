(function(){
    angular.module('myApp').directive('appFooter', function($sce){
        return {
            templateUrl : $sce.trustAsResourceUrl('resources/js/templates/app-footer-tmpl.html'),
            controller : function($scope,footerFactory){
                $scope.socialItems = footerFactory.getSocialLinks();
                $scope.navItems = footerFactory.getNavLinks();
            }
        }

    }) 
}())
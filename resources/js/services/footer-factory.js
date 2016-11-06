(function(){
    
    var footerFactory = function(){
        var navLinks = [{prevValue:'About Us',url:'#'},
                        {prevValue:'Blog',url:'#'},
                        {prevValue:'Press',url:'#'},
                        {prevValue:'IOS App',url:'#'},
                        {prevValue:'Android App',url:'#'}];
        var socialLinks = [{class:'ion-social-facebook',url:'#'},
                        {class:'ion-social-twitter',url:'#'},
                        {class:'ion-social-googleplus',url:'#'},
                        {class:'ion-social-instagram',url:'#'}];
        
        return {
            getLinks : function(){
                return {navLinks:navLinks,socialLinks:socialLinks};
            },
            
            getSocialLinks : function(){
                return socialLinks;
            },
            
            getNavLinks : function(){
                return navLinks;
            }
        }
    }
    
    
    angular.module('myApp').factory('footerFactory',footerFactory);
}())
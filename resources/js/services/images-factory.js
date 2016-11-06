(function(){
    
    var imagesFactory = function(imagesPath){
        var images = [];
            
        var init = function(){
            for(var i=1;i<=8;i++){
                images.push(imagesPath +'project' + i +'.jpg');   
            }
        }
        
        init();
        
        return {
            getImages : function(){
                return images;
            }
        }
    }
    
    
    angular.module('myApp').factory('imagesFactory',imagesFactory);
}())
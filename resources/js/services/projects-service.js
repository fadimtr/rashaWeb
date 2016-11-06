(function(){
    var projectsService = function(imagesFactory){
        var images = [];
        var parts = {firstPart:[],secondPart:[]};
        
        var getPart = function(from,to,partName){
            for(var i=from;i<to;i++){
                parts[partName].push(images[i]);
            }
        }
        
        var init = function(){
            images = imagesFactory.getImages();
            getPart(0,4,'firstPart');
            getPart(4,8,'secondPart');
        }        
        init();
        
        this.getParts = function(){
            return parts;
        }
    }
    
    angular.module('myApp').service('projectsService',projectsService);
}())
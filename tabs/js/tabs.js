// function Tabs(selector){
//     this.elements = $(selector);
//     this.init();
//     this.bindEvents();
// }

// Tabs.prototype.init = function(){
//     this.elements.each(function(index,element){
//         $(element).children('.tabs-bar').children("li").eq(0).addClass("active");
//         $(element).children('.tabs-content').children("li").eq(0).addClass("active");
//     })
// }

// tabs.prototype.bindEvents = function(){
//     this.elements.on('click','.tabs-bar>li',function(e){
//         var $li = $(e.currentTarget);
//         $li.addClass("active").siblings().removeClass("active");
//         var index=$li.index();
//         var $content =$li.closest(".tabs").find(".tabs-content>li").eq(index);
//         console.log($content);
//         $content.addClass('active').siblings().removeClass("active");
//         // console.log(index);
//     })
// }

class Tabs{
    constructor(selector){
        this.elements = $(selector);
        this.init();
        this.bindEvents();
    }
    init(){
        this.elements.each(function(index,element){
            $(element).children('.tabs-bar').children("li").eq(0).addClass("active");
            $(element).children('.tabs-content').children("li").eq(0).addClass("active");
        })
    }
    bindEvents(){
        this.elements.on('click','.tabs-bar>li',function(e){
            var $li = $(e.currentTarget);
            $li.addClass("active").siblings().removeClass("active");
            var index=$li.index();
            var $content =$li.closest(".tabs").find(".tabs-content>li").eq(index);
            $content.addClass('active').siblings().removeClass("active");
            // console.log(index);
        })
    }
}
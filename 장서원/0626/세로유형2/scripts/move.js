$(".nav > ul > li").hover(
    function(){
        $(this).find(".submenu").slideDown();
    },function(){
        $(this).find(".submenu").slideUp();
});
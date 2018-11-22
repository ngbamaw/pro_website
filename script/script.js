var $list_li_menu = $('nav').children().children();
var menu_hide = true;
var switcher = new Switch('.section-cv') ;

$list_li_menu.each(function(index, element){
    $(element).click(function(){
        if(!$(element).hasClass('selected')){
            $('li').removeClass("selected");
            $(element).addClass('selected');
            $('section').removeClass("show");
            $('section').addClass("hide");
            $('#'+$(element).data('link')).removeClass("hide");
            $('#'+$(element).data('link')).addClass("show");
            if($(element)[0].id == 'CV_in' && $(window).width() < 1024){              
                switcher.build();
                
			}else{
				switcher.destroy();
			}
        }
    });
});

$(window).resize(function(){
    if($(window).width() > 1024){
        $("#menu").show();
        switcher.destroy();
    }else{
        $("#menu").hide();
        $("#container-icon-menu").css({"background": "grey" });
        $("rect").attr("fill", "black");
        menu_hide = true;
        switcher.build();
    }

});

$("#container-icon-menu").click(function(){
    if(menu_hide){
        $("#menu").show();
        $(this).css({"background": "black" });
        $("rect").attr("fill", "grey");
        menu_hide = false;
    }else{
        $("#menu").hide();
        $(this).css({"background": "grey" });
        $("rect").attr("fill", "black");
        menu_hide = true;
    }
});
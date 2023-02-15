$(function(){
    //submenu 숨긴다.
    $('.submenu_wrap').hide();
    //마우스를 li에 올리면, submenu가 아래로 미끄러지듯 내려온다.
    $('.gnb li').mouseenter(function(){
        $(this).children('.submenu_wrap').stop().slideDown();
    });
    //마우스가 li(submenu포함)를 벗어나면, submenu가 위로 미끌어지듯 올라간다.
    $('.gnb li').mouseleave(function(){
        $(this).children('.submenu_wrap').stop().slideUp();
    });
});
//login popup
$(function(){
    //popup 안보이게 한다.
    $('.popup_wrap').hide();
    //popup_open을 클릭하면,popup이 보인다.
    $('.popup_open').click(function(){
        $('.popup_wrap').fadeIn(200);
    });
    //close_btn을 클릭하면,popup이 안보인다.
    $('.close_btn').click(function(){
        $('.popup_wrap').fadeOut(200);
    });
});
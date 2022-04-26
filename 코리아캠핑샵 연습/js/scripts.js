// 메인이미지 슬라이더
$(document).ready(function(){
    var num = 0;
    setInterval(function(){
        if(num<2){
            num++;
            $('.main ul').animate({
                top:'-=300'
            },'slow')
        }else{
            num = 0;
            $('.main ul').animate({
                top:0
            },'slow')
        }
    },3000)
});

//탭바
$(document).ready(function(){
    $('.tab_btn a').first().fadeIn(0);

    $('.tab_btn a').click(function(){
        $('.tab_btn a').removeClass('active');
        $(this).addClass('active')

        var i = $(this).parent().index();
        $('.tab_content > div').fadeOut(0);
        $('.tab_content > div').eq(i).fadeIn('fast');
    });
});

//메뉴
$(document).ready(function(){
    $('.gnb > ul > li').hover(function(){
        $('.subnav, .gnbbg').stop().slideDown('slow');
    }, function(){
        $('.subnav, .gnbbg').stop().slideUp('slow');
    });
});
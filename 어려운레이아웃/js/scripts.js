//메뉴
$(document).ready(function(){
    $('.gnb > ul > li').hover(function(){
        $(this).stop().find('.subnav').fadeIn('fast')

        $(this).mouseleave(function(){
            $(this).stop().find('.subnav').fadeOut('fast')
        })
    })
})


//이미지슬라이드
$(document).ready(function(){
    var num = 0;

    $('.main > ul > li').first().fadeIn(0);

    setInterval(function(){
        if( num < 2){
            num++;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow');
        }else{
            num = 0;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow');
        }
    }, 3000)
});

//탭바
$(document).ready(function(){
    $('.tab_btn a').click(function(){
        $('.tab_btn a').removeClass('active');
        $(this).addClass('active');

        var i = $(this).parent().index();

        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn('fast');
    })
});
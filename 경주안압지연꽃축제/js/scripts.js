// 이미지슬라이드
$(document).ready(function(){
    var num = 0;
    $('.main ul li').first().fadeIn(0);

    setInterval(function(){
        if(num<2){
            num++;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow');
        }else{
            num = 0;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow');
        }
    },3000);
});

// 메뉴
$(document).ready(function(){
    $('.mainnav').hover(function(){
        $(this).find('+ .subnav').stop().slideDown('fast')
        
        $(this).parent().mouseleave(function(){
            $(this).find('.subnav').stop().slideUp('fast')
        });
    });
});

// 팝업
$(document).ready(function(){
    $('.notice>ul>li').first().click(function(){
        $('.popup').fadeIn(0);
    });
});

$(document).ready(function(){
    $('.popup>a').first().click(function(){
        $('.popup').fadeOut(0);
    });
});
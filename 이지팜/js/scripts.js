// 이미지슬라이드
$(document).ready(function(){
    var num = 0;
    setInterval(function(){
        if(num < 2){
            num++;
            $('.main ul').animate({
                top:'-=350'
            },'slow')
        }else{
            num = 0;
            $('.main ul').animate({
                top:0
            },'slow')
        }
    },3000)
});

// 팝업
$(document).ready(function(){
    $('.notice > ul > li:nth-child(1)').click(function(){
        $('.popup').fadeIn('fast');
    })
    $('.popup a').click(function(){
        $('.popup').fadeOut('fast');
    })
});


// 메뉴
$(document).ready(function(){
    $('.mainnav').hover(function(){
        $(this).find('+ .subnav').stop().fadeIn('fast');

        $(this).parent().mouseleave(function(){
            $(this).find('.subnav').stop().fadeOut('fast');
        });
    });
});
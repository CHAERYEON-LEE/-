//메뉴
$(document).ready(function(){
    $('.gnb ul li').hover(function(){
        $('.gnbbg, .subnav').stop().slideDown('fast')
    }, function(){
        $('.gnbbg, .subnav').stop().slideUp('fast')
    });
});


// 메인이미지 슬라이드
$(document).ready(function(){
    var num = 0;
    
    setInterval(function(){
        if(num < 2){
            num++;
            $('.main ul').animate({
                left:'-=1200'
            },'slow')
        }else{
            num = 0;
            $('.main ul').animate({
                left:0
            },'slow')
        }
    }, 3000);
});

//  팝업
$(document).ready(function(){
    $('.notice ul li:nth-child(1)').click(function(){
        $('.popup').fadeIn('fast');
    })
});

$(document).ready(function(){
    $('.popup_wrap a').click(function(){
        $('.popup').fadeOut('fast');
    })
});
//메뉴
$(document).ready(function(){
    $('.gnb > ul > li').hover(function(){
        $('.gnbbg, .subnav').stop().fadeIn('fast')
    }, function(){
        $('.gnbbg, .subnav').stop().fadeOut('fast')
    })
});

// 메인 이미지 슬라이드
$(document).ready(function(){
    var num = 0;

    setInterval(function(){
        if(num < 2){
            num++;
            $('.main ul').animate({
                top:'-=300'
            },'slow')
        }else{
            num = 0;
            $('.main ul').eq(num).animate({
                top:0
            },'slow')
        }
    },3000)
});


// 탭바
$(document).ready(function(){
    $('.tab_btn a').click(function(){
        $('.tab_btn a').removeClass('active');
        $(this).addClass('active');

        var i = $(this).parent().index();

        $('.bwrap>div').fadeOut(0)
        $('.bwrap>div').eq(i).fadeIn(0)
    });
});


//팝업
$(document).ready(function(){
    $('.notice_content ul li').first().click(function(){
        $('.popup').fadeIn('fast');
    })
});
$(document).ready(function(){
    $('.popup a').first().click(function(){
        $('.popup').fadeOut('fast');
    })
});
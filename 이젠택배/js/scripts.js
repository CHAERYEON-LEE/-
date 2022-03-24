
// 이미지슬라이드
$(document).ready(function(){
    var num = 0;

    $('.main li').first().fadeIn(0);

    setInterval(function(){
        if(num < 2){
            num++;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow')
        }else{
            num = 0;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow')
        }
    },3000)
})

// 팝업
$(document).ready(function(){
    $('.notice > ul > li:nth-child(1)').click(function(){
        $('.popup').fadeIn(0);
    })
})

$(document).ready(function(){
    $('.popup > a').click(function(){
        $('.popup').fadeOut(0);
    })
})

//메뉴
$(document).ready(function(){
    $('.gnb').hover(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
    },function(){
        $('.subnav, .subbg').stop().slideUp('fast');
    })
})
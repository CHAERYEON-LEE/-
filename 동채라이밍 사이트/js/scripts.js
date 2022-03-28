//메인이미지 슬라이드
$(document).ready(function(){
    var num = 0;

    $('.main li').first().fadeIn(0);

    setInterval(function(){
        if(num < 2){
            num++;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow');
        }else{
            num = 0;
            $('.main li').fadeOut('slow');
            $('.main li').eq(num).fadeIn('slow');
        }
    },3000);
})

// 탭바
$(document).ready(function(){
    $('.tab_btn a').click(function(){
        $('.tab_btn a').removeClass('active');
        $(this).addClass('active');

        var i = $(this).parent().index();

        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn('fast')
    });
});

$(document).ready(function(){
    $('.notice ul li').first().click(function(){
        $('.popup').fadeIn('fast');
    })
});
$(document).ready(function(){
    $('.popup a').first().click(function(){
        $('.popup').fadeOut('fast');
    })
});
$(document).ready(function(){
    $('.gnb > ul > li').hover(function(){
        $(this).find('.subnav').stop().slideDown('fast');
    },function(){
        $(this).find('.subnav').stop().slideUp('fast');
    });
});

$(document).ready(function(){
    var num = 0;

    setInterval(function(){
        if(num < 2){
            num++;
            $('.main ul').animate({
                left: '-=1200'
            },'slow')
        }else{
            num = 0;
            $('.main ul').animate({
                left: 0
            },'slow')
        }
    },3000)
});

$(document).ready(function(){
    $('.btn a').click(function(){
        $('.btn a').removeClass('active');
        $(this).addClass('active');

        var i = $(this).parent().index();

        $('.bwrap > div').fadeOut(0);
        $('.bwrap > div').eq(i).fadeIn(0);
    })
});

$(document).ready(function(){
    $('.notice > ul > li:nth-child(1) > a').click(function(){
        $('.modal').stop().fadeIn('fast');
    });
});

$(document).ready(function(){
    $('.modal > a').click(function(){
        $('.modal').stop().fadeOut('fast');
    });
});
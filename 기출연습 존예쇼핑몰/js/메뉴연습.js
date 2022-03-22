$(document).ready(function(){
    $('.gnb > ul > li').hover(function(){
        $(this).find('.subnav').stop().slideDown('fast');
    },function(){
        $(this).find('.subnav').stop().slideUp('fast');
    })
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

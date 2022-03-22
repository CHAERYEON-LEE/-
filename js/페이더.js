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

            $('.main li').first().fadeIn('slow');
        }
    },3000);
});
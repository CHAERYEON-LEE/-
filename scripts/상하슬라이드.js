$(document).ready(function(){
    var num = 0;
    setInterval(function(){
        if(num<2){
            num++;
            $('.main ul').animate({
                top:'-=300'
            },'slow');
        }else{
            num = 0;
            $('.main ul').animate({
                top:0
            },'slow');
        }
    },1000);
})
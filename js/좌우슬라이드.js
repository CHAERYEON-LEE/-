$(document).ready(function(){
    var num = 1;
    setInterval(function(){
        if(num <3){
            num++;
            
            $('.main ul').animate({
                left: '-=1200'
            },'slow');
        }else{
            num = 1;

            $('.main ul').animate({
                left: 0
            },'slow');
        }
    },3000);
})
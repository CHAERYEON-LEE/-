$(document).ready(function(){
    $('.gnb > ul').hover(function(){
        $('.subnav').stop().slideDown('fast');
    },function(){
        $('.subnav').stop().slideUp('fast');
    });
});
$(document).ready(function(){
    $('.gnb > ul').hover(function(){
        $('.subnav, .gnbbg').stop().slideDown('fast');
    },function(){
        $('.subnav, .gnbbg').stop().slideUp('fast');
    });
});
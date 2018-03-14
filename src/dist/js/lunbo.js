
var window_width = document.documentElement.clientWidth;
if(window_width<1200){
    window_width = 1200;
}
$('.section2').css({width:window_width+'px'});
$('#image2').css({right:-window_width+'px'});

var imgIndex=1;
setInterval(function () {
    switch(imgIndex){
        case 1:
            $('#image1').animate({right:0},1000,'swing',function () {
                $('#image1').css({zIndex:-1});
            });
            $('#image2').animate({right:window_width+'px'},1000,'swing',function () {
                $('#image2').css({right:-window_width+'px',zIndex:-2})
            });
            $('#image3').animate({right:window_width+'px'},1000,'swing',function () {
                $('#image3').css({right:-window_width+'px',zIndex:-3})
            });
            imgIndex=2;
            break;
        case 2:
            $('#image2').animate({right:0},1000,'swing',function () {
                $('#image2').css({zIndex:-1});
            });
            $('#image3').animate({right:window_width+'px'},1000,'swing',function () {
                $('#image3').css({right:-window_width+'px',zIndex:-2})
            });
            $('#image1').animate({right:window_width+'px'},1000,'swing',function () {
                $('#image1').css({right:-window_width+'px',zIndex:-3})
            });
            imgIndex=3;
            break;
        case 3:
            $('#image3').animate({right:0},1000,'swing',function () {
                $('#image3').css({zIndex:-1});
            });
            $('#image1').animate({right:window_width+'px'},1000,'swing',function () {
                $('#image1').css({right:-window_width+'px',zIndex:-2})
            });
            $('#image2').animate({right:window_width+'px'},1000,'swing',function () {
                $('#image2').css({right:-window_width+'px',zIndex:-3})
            });
            imgIndex=1;
            break;
    }
},3000);
$(window).resize(function() {
    var window_width = document.documentElement.clientWidth;
    if(window_width<1200){
        window_width = 1200;
    }
    $('.section2').css({width:window_width+'px'});
});
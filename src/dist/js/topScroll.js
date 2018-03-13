
var xqrzData = [];
if (topData.code == '0000') {
    if(topData.data && topData.data.length > 0) {
        xqrzData = topData.data;
    }
}
var clearTime;
var _value;
function fillData(data) {
    var d = '';
    for(var i=0;i<data.length;i++){
        d+='<div class="line-info"> ' +
            '<a class="company-name" href="javascript:;" title="'+ data[i].entName+'">'+ data[i].entName+'</a> ' ;
        d+='<div class="esdate">'+ data[i].esdate+'</div>' ;
        d+='</div>'
    }


    $('#topScroll').html(d);

    var _topScroll = $('.top-scroll');
    var _scrollWrapHeight = $('.section1').height()-30;
    $('.scroll-wrap').css({'height':_scrollWrapHeight,'overflowY':'hidden'});
    var _topScrollHeight = _topScroll.height();
    _value = _scrollWrapHeight - _topScrollHeight;

    goTop();
}



function goTop() {
    var _topScroll = $('.top-scroll');
    var v = 800;
    var x = parseInt((-_value+parseInt(_topScroll.css('top'))) /38) * v;
    _topScroll.animate({'opacity':1},400);
    _topScroll.delay(800).animate({
        'top':_value
    }, x,'linear',function() {
        clearTime = setTimeout(function () {
            _topScroll.css('top', 0);
            goTop();
        }, 800)
    });
}

$('.top-scroll').hover(function () {
    $('.top-scroll').stop(true,false);
},function () {
    if(_value < 0){
        goTop();
    }else{
        return;
    }
});

fillData(xqrzData,1)
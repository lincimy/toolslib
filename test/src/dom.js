function getScrollTop(){
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

function setScrollTop(value){
    window.scrollTo(0, value);
    return value;
}

function offset(elem){
    var pos = {
        left: 0,
        top: 0
    };
    while(elem){
        pos.left += elem.offsetLeft;
        pos.top += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return pos;
}
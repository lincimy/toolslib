function hasClass(elem, clsName){
    var reg = new RegExp("(\\s|^)" + clsName + "(\\s|$)");
    return reg.test(elem.className);
}

function addClass(elem,clsName){
    if(!hasClass(elem, clsName)){
        elem.className += ' ' + clsName;
    }
}

function removeClass(elem, clsName){
    if(hasClass(elem, clsName)){
        var reg = new RegExp("(\\s|^)" + clsName + "(\\s|$)");
        elem.className = elem.className.replace(reg, ' ');
    }
}
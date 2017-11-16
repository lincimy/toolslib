
var hasClass = require('./hasClass');

/**
 * 删除元素的某个class
 * @function removeClass
 * @param {HTMLElement} elem 
 * @param {String} clsName 
 */
function removeClass(elem, clsName){
    if(hasClass(elem, clsName)){
        var reg = new RegExp("(\\s|^)" + clsName + "(\\s|$)");
        elem.className = elem.className.replace(reg, ' ');
    }
}

module.exports = removeClass;
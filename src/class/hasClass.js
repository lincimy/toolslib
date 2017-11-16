/**
 * 判断元素是否有某个class
 * @function hasClass
 * @param {HTMLElement} elem 
 * @param {String} clsName 
 * @returns {Boolean}
 */
function hasClass(elem, clsName){
    var reg = new RegExp("(\\s|^)" + clsName + "(\\s|$)");
    return reg.test(elem.className);
}

module.exports = hasClass;
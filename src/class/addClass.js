/**
 * 为元素添加class
 * @function addClass
 * @param {HTMLElement} elem 
 * @param {String} clsName 
 */

var hasClass = require('./hasClass');

function addClass(elem,clsName){
    if(!hasClass(elem, clsName)){
        elem.className += ' ' + clsName;
    }
}

module.exports = addClass;
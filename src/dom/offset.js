/**
 * 获取一个元素距文档的位置，类似JQ的offset()
 * @function offset
 * @param {HTMLElement} elem 
 * @returns {Object} {left:number,top:number}
 */
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

module.exports = offset;
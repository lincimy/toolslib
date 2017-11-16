/**
 * 获取滚动条距底部的距离
 * @function getScrollTop
 * @returns {number}
 */
function getScrollTop(){
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

module.exports = getScrollTop;
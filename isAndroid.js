/**
 * 判断访问设备是否是Android系统
 * @function isAndroid
 * @returns {Boolean}
 */
function isAndroid() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('android') >= 0;
}

module.exports = isAndroid;
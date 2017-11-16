/**
 * 判断访问设备是否iOS系统
 * @function isIOS
 * @returns {Boolean}
 */
function isIOS() {
    var ua = window.navigator.userAgent.toLowerCase();
    return (ua.indexOf('iphone') || ua.indexOf('ipad') || ua.indexOf('ipod')) >= 0;
}

module.exports = isIOS;
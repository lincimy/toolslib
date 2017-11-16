/**
 * 判断当前环境是否为某个客户端端内
 * @function isClient
 * @param {String} clientFlag 
 * @returns {boolean}
 */
function isClient(clientFlag){
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf(clientFlag) >= 0;
}

module.exports = isClient;
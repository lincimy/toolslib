/**
 * url参数转化成对象
 * @function parseQueryString
 * @param {String} url default: window.location.href
 * @returns {object}
 */
function parseQueryString(url){
    url = url == null? window.location.href : url;

    if(url.lastIndexOf('?') < 0) return {};
    var search = url.substring(url.lastIndexOf('?') + 1);
    if(!search){
        return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

module.exports = parseQueryString;
/**
 * 对象序列化
 * @function stringfyQueryString
 * @param {Object} obj 
 * @returns {String}
 */
function stringfyQueryString(obj){
    if(!obj) return '';

    var array = [];

    for(var attr in obj){
        var value = obj[attr];

        if(value instanceof Array){
            for(var i=0; i<value.length; i++){
                array.push(encodeURIComponent(attr + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }
        array.push(encodeURIComponent(attr) + '=' + encodeURIComponent(value));
    }
    return array.join('&');
}

module.exports = stringfyQueryString;
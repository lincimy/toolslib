function parseQueryString(url){
    url = url == null? window.location.href : url;

    if(url.lastIndexOf('?') < 0) return {};
    var search = url.substring(url.lastIndexOf('?') + 1);
    if(!search){
        return {};
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

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
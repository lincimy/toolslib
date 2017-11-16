function isIOS() {
    var ua = window.navigator.userAgent.toLowerCase();
    return (ua.indexOf('iphone') || ua.indexOf('ipad') || ua.indexOf('ipod')) >= 0;
}

function isAndroid() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('android') >= 0;
}

function isClient(clientFlag){
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf(clientFlag) >= 0;
}
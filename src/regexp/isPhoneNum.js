/**
 * 判断是否为手机号码
 * @function isPhoneNum
 * @param {Number|String} str 
 * @returns {Boolean}
 */
function isPhoneNum(str){
    return /^(13[0-9]|15[012356789]|17[0-8]|18[0-9]|14[5-9]|19[8-9]|166)[0-9]{8}$/.test(str);
}

module.exports = isPhoneNum;
/**
 * 判断是否为电子邮箱
 * @function isEmail
 * @param {String} email 
 * @returns 
 */
function isEmail(email){
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
}

module.exports = isEmail;
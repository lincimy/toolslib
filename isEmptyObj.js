/**
 * 判断是否为空对象
 * @function isEmptyObj
 * @param {Object} obj 
 * @returns {Boolean}
 */
function isEmptyObj(obj){
    if(!obj || typeof obj != 'object' || Array.isArray(obj)){
        return false;
    }
    return Object.keys(obj).length <= 0;
}

module.exports = isEmptyObj;
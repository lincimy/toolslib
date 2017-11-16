/**
 * 深度复制，支持常见类型
 * @function deepClone
 * @param {any} value 
 * @returns {any}
 */
function deepClone(value){
    var copy;

    //处理三种基本类型和null,undefined
    if(null == value || 'object' != typeof value){
        return value;
    }

    //处理Date类型
    if(value instanceof Date){
        copy = new Date();
        copy.setTime(value.getTime());
        return copy;
    }

    // 处理array类型
    if(value instanceof Array){
        copy = [];
        for(var i=0; i<value.length; i++){
            copy[i] = deepClone(value[i]);
        }
        return copy;
    }

    // 处理object类型
    if(value instanceof Object){
        copy = {};
        for(var attr in value){
            if(value.hasOwnProperty(attr)){
                copy[attr] = deepClone(value[attr]);
            }
        }
        return copy;
    }

    throw new Error("Unable to copy values! Its type isn't supported.");
}

module.exports = deepClone;
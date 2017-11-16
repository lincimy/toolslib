/**
 * 返回一个范围内的随机数
 * @function randomNum
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function randomNum(min, max){
    return Math.floor(min + Math.random() * (max - min));
}

module.exports = randomNum;
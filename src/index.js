/**
 * @desc webpack打包入口文件
 */
const arrayEqual = require('./array/arrayEqual');

const hasClass = require('./class/hasClass');
const addClass = require('./class/addClass');
const removeClass = require('./class/removeClass');

const getScrollTop = require('./dom/getScrollTop');
const setScrollTop = require('./dom/setScrollTop');
const offset = require('./dom/offset');

const randomNum = require('./random/randomNum');

const isIOS = require('./device/isIOS');
const isAndroid = require('./device/isAndroid');
const isClient = require('./device/isClient');

const isEmail = require('./regexp/isEmail');
const isIdCard = require('./regexp/isIdCard');
const isPhoneNum = require('./regexp/isPhoneNum');
const isUrl = require('./regexp/isUrl');

const deepClone = require('./object/deepClone');
const isEmptyObj = require('./object/isEmptyObj');

const parseQueryString = require('./url/parseQueryString');
const stringfyQueryString = require('./url/stringfyQueryString');

const throttle = require('./function/throttle');
const debounce = require('./function/debounce');

module.exports = {
    arrayEqual,

    hasClass,
    addClass,
    removeClass,

    getScrollTop,
    setScrollTop,
    offset,

    randomNum,

    isIOS,
    isAndroid,
    isClient,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,

    deepClone,
    isEmptyObj,

    parseQueryString,
    stringfyQueryString,

    throttle,
    debounce
}
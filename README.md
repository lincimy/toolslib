# toolslib

![LICENSE MIT](https://img.shields.io/npm/l/express.svg)

 
前端业务代码工具库  

业务开发过程中，会经常用到`数组相等判断`、`url参数转对象`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。

## 安装使用

1. 直接下载`min`目录下的[toolslib.min.js](https://github.com/lincimy/toolslib/tree/master/min/toolslib.min.js)使用
2. 使用npm安装

### 浏览器:
``` html
  <script src="toolslib.min.js"></script>
  <script>
      var flag = toolslib.arrayEqual([1,2],[1,2]);
  </script>
```

### npm:
``` bash
$ npm install --save-dev toolslib
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const toolslib = require('toolslib')
const flag = toolslib.arrayEqual([1,2],[1,2])
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('toolslib/<方法名>')
const arrayEqual = require('toolslib/arrayEqual')
const flag = arrayEqual([1,2],[1,2])
```
## API文档

### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 

### Class
#### &emsp;&emsp;[addClass][addClass]&emsp;&emsp;为元素添加class  
#### &emsp;&emsp;[hasClass][hasClass]&emsp;&emsp;判断元素是否有某个class  
#### &emsp;&emsp;[removeClass][removeClass]&emsp;&emsp;为元素移除class  

### Device  
#### &emsp;&emsp;[isAndroid][isAndroid]&emsp;&emsp;判断访问设备是否是Android系统
#### &emsp;&emsp;[isIOS][isIOS]&emsp;&emsp;判断访问设备是否iOS系统
#### &emsp;&emsp;[isClient][isClient]&emsp;&emsp;判断当前环境是否为某个客户端端内

### Dom  
#### &emsp;&emsp;[getScrollTop][getScrollTop]&emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp;[offset][offset]&emsp;&emsp;获取一个元素的距离文档(document)的位置，类似jQ中的offset()
#### &emsp;&emsp;[setScrollTop][setScrollTop]&emsp;&emsp;设置滚动条距顶部的距离

### Function  
#### &emsp;&emsp;[debounce][debounce]&emsp;&emsp;函数防抖   
#### &emsp;&emsp;[throttle][throttle]&emsp;&emsp;函数节流   

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空

### Random  
#### &emsp;&emsp;[randomNum][randomNum]&emsp;&emsp;生成指定范围随机数 

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址

### Url
#### &emsp;&emsp;[parseQueryString][parseQueryString]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQueryString][stringfyQueryString]&emsp;&emsp;对象序列化

[arrayEqual]:https://github.com/lincimy/toolslib/tree/master/src/array/arrayEqual.js

[addClass]:https://github.com/lincimy/toolslib/tree/master/src/class/addClass.js
[hasClass]:https://github.com/lincimy/toolslib/tree/master/src/class/hasClass.js
[removeClass]:https://github.com/lincimy/toolslib/tree/master/src/class/removeClass.js

[isAndroid]:https://github.com/lincimy/toolslib/tree/master/src/device/isAndroid.js
[isIOS]:https://github.com/lincimy/toolslib/tree/master/src/device/isIOS.js
[isClient]:https://github.com/lincimy/toolslib/tree/master/src/device/isClient.js

[getScrollTop]:https://github.com/lincimy/toolslib/tree/master/src/dom/getScrollTop.js
[offset]:https://github.com/lincimy/toolslib/tree/master/src/dom/offset.js
[setScrollTop]:https://github.com/lincimy/toolslib/tree/master/src/dom/setScrollTop.js

[debounce]:https://github.com/lincimy/toolslib/tree/master/src/function/debounce.js
[throttle]:https://github.com/lincimy/toolslib/tree/master/src/function/throttle.js

[deepClone]:https://github.com/lincimy/toolslib/tree/master/src/object/deepClone.js
[isEmptyObject]:https://github.com/lincimy/toolslib/tree/master/src/object/isEmptyObject.js

[randomNum]:https://github.com/lincimy/toolslib/tree/master/src/random/randomNum.js

[isEmail]:https://github.com/lincimy/toolslib/tree/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/lincimy/toolslib/tree/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/lincimy/toolslib/tree/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/lincimy/toolslib/tree/master/src/regexp/isUrl.js

[parseQueryString]:https://github.com/lincimy/toolslib/tree/master/src/url/parseQueryString.js
[stringfyQueryString]:https://github.com/lincimy/toolslib/tree/master/src/url/stringfyQueryString.js

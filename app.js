define("amd", ["require", "exports"], function (require, exports) {
    "use strict";
    var a = 2;
    return a;
});
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var hello = 'hello tsc';
    document.querySelectorAll('.app')[0].innerHTML = hello;
});
/**
 * tsconfig lib [] example
 * es2019
 */
// console.log([1, 2, [3, 4]].flat())
var libs = {};
var l = {};
function isLessAppVersion(version, appName) {
    appName = appName ? appName : 'WeiYi';
    if (!/(\d+(\.(\d{1,2})+){2})/.test(version))
        throw new Error('版本号格式不对，正确版本号如：1.0.0，1.01.01');
    var u = navigator.userAgent;
    // const _isApp = /WeiYi/.test(u)
    var _isApp = new RegExp("" + appName, 'i').test(u);
    if (!_isApp)
        throw new Error('不在app内，请勿使用此方法');
    // const appMatches = /WeiYi\/(\d+(\.(\d{1,2})+){0,2})\b/i.exec(window.navigator.userAgent)
    var appMatches = new RegExp(appName + "/(\\d+(\\.(\\d{1,2})+){0,2})\\b", 'i').exec(window.navigator.userAgent);
    if (appMatches && appMatches[1]) {
        var curVersion = appMatches[1].split('.').map(Number);
        var checkVersion = version.split('.').map(Number);
        if (checkVersion[0] < curVersion[0]) {
            return true;
        }
        else if (checkVersion[0] === curVersion[0] && checkVersion[1] < curVersion[1]) {
            return true;
        }
        else if (checkVersion[0] === curVersion[0] && checkVersion[1] === curVersion[1] && checkVersion[2] <= curVersion[2]) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        throw new Error('未匹配到任何版本号');
    }
}

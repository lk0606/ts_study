function isLessAppVersion(version, appName) {
    appName = appName ? appName : 'WeiYi';
    var checkVersion = /(\d+(\.(\d{1,2})+){0,2})/.test(version);
    if (!checkVersion)
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
        var checkVersion_1 = version.split('.').map(Number);
        if (checkVersion_1[0] > curVersion[0]) {
            return true;
        }
        else if (checkVersion_1[0] === curVersion[0] && checkVersion_1[1] > curVersion[1]) {
            return true;
        }
        else if (checkVersion_1[0] === curVersion[0] && checkVersion_1[1] === curVersion[1] && checkVersion_1[2] >= curVersion[2]) {
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
isLessAppVersion('5.7.1')

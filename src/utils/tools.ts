
function isLessAppVersion(version: string, appName?: string): boolean {
    appName = appName ? appName : 'WeiYi'
    if(!/(\d+(\.(\d{1,2})+){2})/.test(version)) throw new Error('版本号格式不对，正确版本号如：1.0.0，1.01.01')
    const u = navigator.userAgent
    // const _isApp = /WeiYi/.test(u)
    const _isApp = new RegExp(`${appName}`, 'i').test(u)
    if (!_isApp) throw new Error('不在app内，请勿使用此方法')
    // const appMatches = /WeiYi\/(\d+(\.(\d{1,2})+){0,2})\b/i.exec(window.navigator.userAgent)
    const appMatches = new RegExp(`${appName}\/(\\d+(\\.(\\d{1,2})+){0,2})\\b`, 'i').exec(window.navigator.userAgent)
    if(appMatches && appMatches[1]) {
        const curVersion = appMatches[1].split('.').map(Number)
        const checkVersion = version.split('.').map(Number)
        if(checkVersion[0] < curVersion[0]) {
            return true
        } else if(checkVersion[0] === curVersion[0] && checkVersion[1] < curVersion[1]) {
            return true
        } else if(checkVersion[0] === curVersion[0] && checkVersion[1] === curVersion[1] && checkVersion[2] <= curVersion[2]) {
            return true
        } else {
            return false
        }
    } else {
        throw new Error('未匹配到任何版本号')
    }
}

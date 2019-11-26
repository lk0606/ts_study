/**
 * 类型保护
 * ts能在特定的区块保证变量属于某种确定的类型。
 * 例子: getLang中的断言、instanceof
 * 方法
 * instanceof 判断实例是否属于某个类
 * in 某个属性是否属于某个对象
 * typeof 判断基本类型
 * isJava 保护函数
 */

enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('hello Java')
    }
    java: any
}
class JavaScript{
    helloScript() {
        console.log('hello javaScript')
    }
    javaScript: any
}

function getLang1(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // if( (lang as Java).helloJava ) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as JavaScript).helloScript()
    // }
    // if(lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloScript()
    // }
    // if('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloScript()
    // }
    if(typeof x === 'string') {
        x.length
    } else {
        x.toFixed(2)
    }


    return lang
}

getLang1(Type.Strong, 1)

/**
 * 保护函数
 * 返回：类型谓词
 */
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava() !==undefined
}

function getLang2(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    if(isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloScript()
    }
}

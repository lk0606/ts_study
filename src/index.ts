
// import './chapter1/type.ts'
// import './chapter1/enum.ts'
// import './chapter1/types/fn.ts'
// import './chapter1/types/10.class.ts'
// import './chapter1/types/11.abstract.ts'
// import './chapter1/types/13.T.ts'
// import './chapter1/type-checking-mechanism/15.1.type-inference.ts'
// import './chapter1/type-checking-mechanism/18. advanced-cross-union.ts'
// import './chapter1/type-checking-mechanism/19. index-type.ts'
// import './chapter2/4.declare/global-lib.js'
// globalLib({x: 1})
// globalLib.doSomething()
import moduleLib from "./chapter2/4.declare/module-lib";
// moduleLib.doSomething()
import umdLib from "./chapter2/4.declare/umd-lib";
umdLib
// console.log(umdLib, 'umdLib')

// 模块化插件 增加自定义方法
import m from 'moment'
declare module 'moment' {
    export function myFn(): void
}
m.myFn = ()=> {
    console.log('module plugins function is running...')
}
m.myFn()

/**
 * 全局插件 增加全局方法
 * 对全局命名空间的一种污染，不建议
 */
declare global {
    namespace globalLib {
        function doAnything(): void
    }
}
globalLib.doAnything = ()=> {
    console.log('globalLib.doAnything……')
}
globalLib.doAnything()

import $ from 'jquery'
$('.app').css('color', 'red')

let hello: string = 'hello tsc'
// hello = 1
document.querySelectorAll('.app')[0].innerHTML = hello




/**
 * 接口之间的声明合并
 * 如果是全局模块，不在一个文件，甚至可以发生合并
 * 接口非函数成员类型必须保证唯一性
 * 类似函数重载啊
 * 接口合并时顺序
 * 规则：接口内部按自己顺序，接口之间，后面的排在前面
 * 例外：
 * 字面量定义则排在最前面
 */

interface A {
    x: number
    // y: number // success
    // y: string // err
    foo(bar: number): number // 3 !5
    foo(bar: 'a'): number // !2
}
interface A {
    y: number
    foo(bar: string): string // 1 !3
    foo(bar: number[]): number[] // 2 !4
    foo(bar: 'b'): number // !1
}

let a3: A = {
    x: 1,
    y: 2,
    foo(bar: any): any { return bar },
}

/**
 * 命名空间声明合并
 * 注意：
 * 命名空间导出成员是不可以重复定义的
 * 不同：
 * 接口之间是可以重复定义的
 */

/**
 * 命名空间和函数的合并
 */

function Lib() {

}
namespace Lib {
    export let version = '1.0'
}
// 相当于创建函数并增加了属性
console.log(Lib.version, '函数和命名空间')


/**
 * 命名空间和类
 */
class C3 {

}
namespace C3 {
    export let state = 1
}
console.log(C3.state, '类和命名空间')


/**
 * 命名空间和枚举
 * 注意： 命名空间和函数、类声明合并时， 一定要放在这两者之后，枚举无所谓
 */
enum Color3 {
    Red,
    Yellow,
    Blue
}
namespace Color3 {
    export function mix() {

    }
}
console.log(Color3, '枚举和命名空间')

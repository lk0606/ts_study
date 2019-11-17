
/**
 * 类型兼容性
 * 定义：当类型y可以被赋值给x时，我们可以说类型x兼容类型y    x兼容y：x(目标类型) = y(源类型)
 * 接口类型：成员少的兼容成员多的
 */

let s16: string = 'a'
s16 = null // "strictNullChecks": false,  字符兼容null

// 接口兼容性
interface X16 {
    a: any
    b: any
}
interface Y16 {
    a: any
    b: any
    c: any
}
let x16: X16 = {a: 1, b: 2}
let y16: Y16 = {a:11, b:22, c:33}
// x16 = y16 // x16赋值给y16？
// y16 = x16 // error


/**
 * 函数兼容性
 * 判断：两个函数是否兼容，一般发生在两个函数赋值时
 * 兼容满足条件：
 * 1. 参数个数：目标函数参数的个数一定大于源函数的参数
 */
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}

// 1. 参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler3 = (a: number, b: number, c: number) => {}
// hof(handler3) // error 目标：Handler 源：handler3 目标<源

/**
 * 2. 可选参数/剩余参数
 * 兼容性：
 * 1. 固定参数可以兼容可选参数和剩余参数
 * 2. 可选参数不兼容固定参数和剩余参数的
 * 3. 剩余参数可以兼容固定参数和可选参数
 */

let a16 = (p1: number, p2: number) => {}
let b16 = (p1?: number, p2?: number) => {}
let c16 = (...args: number[]) => {}
// a16 = b16 // 兼容性1
// a16 = c16 // 兼容性1
// b16 = c16 // 讲道理应该是err，但是我的没报错啊 兼容性2 玄学
// b16 = a16 // 讲道理应该是err，但是我的没报错啊 兼容性2
c16 = a16 // 兼容性2
c16 = b16 // 兼容性2

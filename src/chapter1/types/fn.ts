
// 函数定义
function sum1(x: number, y: number): number {
    return x + y
}
// let sum2: (x: number, y:number) => number

// 类型别名 为函数取个名字
type Sum3 = (x: number, y: number)=> number
let sum3: Add = (a, b) => a + b

interface sum4 {
    (x: number, y: number): number // 等上
}
// -------------------------以上四种皆为必传参数

// 可选参数 可选参数必须在必选参数之后
function sum5(x: number, y?: number) {
    return y? x+y : x
}
// sum5(1)

// 类似es6 默认值 必选参数之后的可以不传
function sum6(a:number, b=2, c:number, d=4) {
    return a+b+c+d
}
console.log(sum6(1, undefined, 3), 'sum6(1, undefined, 3)') // 10  1 + 2 + 3 + 4
console.log(sum6(undefined, undefined, 3), 'sum6(undefined, undefined, 3)') // NaN

// 剩余参数  参数个数不固定
function sum7(a:number, ...rest:number[]) {
    return a + rest.reduce((pre, cur)=> pre+cur)
}
// console.log()
console.log(sum7(1, 2, 3, 4), 'sum7(1, 2, 3, 4)')

/**
 * 函数重载
 * c++ 等静态语言中
 * 定义：两个函数相同，参数个数不同或类型不同
 * 好处：不需要为了相似功能的函数，取不同名称
 * tsc 中
 * 定义：先定义函数声明
 */
function sum8(...rest: number[]): number
function sum8(...rest: string[]): string
function sum8(...rest: any[]): any {
    let first = rest[0]
    if(typeof first === 'string') {
        return rest.join('')
    }
    if(typeof first === 'number') {
        return rest.reduce((pre, cur)=> pre + cur)
    }
}
console.log(sum8(1,2,3), 'sum8(1,2,3) 函数重载')
console.log(sum8('a', 'b', 'c'), 'sum8(1,2,3) 函数重载')

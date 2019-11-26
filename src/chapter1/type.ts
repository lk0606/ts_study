
// 原始类型
let bool: boolean,
    num: number,
    str: string

// 数组
let arrNum1: number[],
    arrNum2: Array<number | string>
arrNum2 = [1, '1']

// 元组 只能定义相同类型个数的值，可以push之类操作，但是不可访问
let tuple: [number, string] = [1, '1']
// tuple.push(2)
// console.log(tuple, 'tuple')
// tuple[0]

// 函数
// let add = (x:number, y: number) => x + y
let compute: (x:number, y:number) => number
compute = (a, b) => a + b

// 对象
let obj: {x:number, y: number} = {x: 1, y: 2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1===s2, 's1===s2')

// undefined null
let und:undefined = undefined // 只能是它本身
let nul:null = null // 只能是它本身
// 官方定义：这两类是任何类型的子类，编译器中需设置  "strictNullChecks": false 严格模式可以为true
// num = nul

// void js中是一种操作符，可以将任何表达式返回 undefined 最简洁方式 其实就是说没有返回值。
let noReturn = ()=> {}
let noFn = ():void => {}

// any 和js无区别
let any: any

// never
let err = ()=> {
    throw new Error('error')
}
// while 编译器为什么报错，没懂
let endless = ()=> {
    while (true) {
    }
}

/**
 * 枚举类 会递增 可以单独赋值
 * 原理 反向映射？
 * 字符串枚举不可反向映射
 * 字符串和数字枚举易混淆，不建议使用
 * 枚举不可修改
 */
enum role {
    reporter,
    developer = 1,
    owner,
}
// role.owner = 3
console.log(role.reporter, role.developer, role.owner, 'enum role key')
console.log(role, 'enum')


// 分类
// 1.  常量枚举 const
enum chart {
    a,            // 无初始值
    // b = Char.a,   // 对enum的引用
    c = 1+3,      // 表达式
}
console.log(chart, 'chart')

/**
 * 常量枚举
 * 特性: 编译中会被移除
 * 作用: 不需要对象，只需要对象的值，则可以使用，节省代码？？？
 */
const enum constEnum {
    Jan,
    Feb
}
// console.log(constEnum, 'constEnum') // 浏览器中报错
// 2. computed 需要被计算的成员
/**
 *  非 常量
 *  编译不会计算，
 *  保留至执行阶段
 *  必须有初始值
 */
enum computedEnum {
    d = Math.random(),
    e = '123'.length
}
console.log(computedEnum, 'computedEnum')

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'aaa', b = 'bbb' }

let e:E = 1
let f:F = 2
// e===f // 不同枚举类型不可比较

let e1 = E.a
let e2 = E.b
// e1===e2 // 不可比较
let e3: E.a = 1
e1===e3 // 相同类型 但是编译器为什么报错？？？

// 字符串枚举只能是枚举成员的类型
let g1: G = G.b
let g2: G.a = G.a

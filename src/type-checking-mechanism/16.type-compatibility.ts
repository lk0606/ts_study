
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

/**
 * 2. 参数类型
 * 兼容性
 * 1. 类型兼容
 * 2. 对象类型兼容
 * 函数参数可以相互赋值的方式叫做函数参数的双向协变，可以将精确的类型赋值给不那么精确的类型
 */
let handle16 = (a: string) => {}
// hof(handle16) // type number in not assignable string


interface Point3D {
    x: number
    y: number
    z: number
}

interface Point2D {
    x: number
    y: number

}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

// p3d = p2d
// p2d = p3d // error "strictFunctionTypes": true,

/**
 * 3. 返回值类型
 * 目标函数和愿函数的返回值类型相同或为其字类型
 */
let f16 = () => ({name: 'Alice'})
let g16 = () => ({name: 'Alice', location: 'Beijing'})

f16 = g16

// g16 = f16 // 多的不能赋值给少的

// 函数重载
function overLoad(a: number, b:number): number
function overLoad(a: string, b: string): string
function overLoad(a: any, b: any): any{}


/**
 * 枚举类型兼容
 * 1. 枚举和数值类型是完全兼容的
 * 2. 枚举类型完全不兼容
 */
enum Fruit {
    Apple,
    Banana
}
enum Color {
    Red,
    Yellow
}
let fruit: Fruit.Apple = 3
let no16: number = Fruit.Apple
// let color16: Color.Red = Fruit.Apple // err 2

/**
 * 类兼容 和接口类型
 * 1. 静态成员和构造函数不参与比较，
 * 2. 如果两个类具备完全相同的实例成员，那么实例完全兼容
 * 3. 私有成员则不兼容，只有父类和子类是兼容的
 */

class AA16 {
    constructor(p: number, q: number) {}
    id: number
    private name: string = ''
}
class BB16 {
    static s = 1
    constructor(p: number) {}
    id: number
    private name: string = ''
}

let aa16 = new AA16(1, 2)
let bb16 = new BB16(1)
// aa16 = bb16
// bb16 = aa16
class CC16 extends AA16 {}
let cc16 = new CC16(1, 2)
aa16 = cc16
cc16 = aa16 // success 3

/**
 * 范型兼容
 * 1. 只有接口类型参数T只有在被接口成员使用时，才会影响兼容性
 * 范型函数
 * 1. 两个范型函数定义相同，没有指定类型参数，那么兼容！
 */
interface Empty16<T> {
    value: T
}
let obj1: Empty16<number> = { value: 1 }
let obj2: Empty16<string> = { value: '1' }
// obj1 = obj2 // err 1

let log1 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log2 = <U>(y: U): U => {
    console.log('y')
    return y
}

log1 = log2 // success 范型函数1

/**
 * 口诀吧
 * 当一个类型Y可以被赋值给另一个类型X时，我们可以说类型X兼容类型Y
 * X兼容Y：X（目标类型） = Y（源类型）
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */

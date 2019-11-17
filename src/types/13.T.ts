
/**
 * 13 泛型
 * 定义：不预先确定数据类型，在使用时才确定
 * T相当于any类型，也保证了返回类型和参数是一致的
 */
function log<T>(value: T): T {
    console.log(value)
    return value
}
// log<string[]>(['a','b'])
// log(['a','b'])

// 类型别名定义泛型
// type Log = <T>(value: T) => T
// let myLog: Log = log

// myLog('myLog')

// 等价类型别名
// interface Log {
//     <T>(value: T): T
// }
// 所有成员受控制
// interface Log <T> {
//    (value: T): T
// }
// let myLog: Log<number> = log
// myLog(1)
interface Log <T = string> {
   (value: T): T
}
let myLog: Log = log
// myLog('1')

/**
 * 14. 泛型类
 * 定义：约束类的成员
 * 注意点：
 *      1. 泛型不能应用类的静态成员
 * 好处：
 *      1. 函数和类可以轻松支持多种类型，增强程序扩展性
 *      2. 不必写很多函数重载、冗长的联合类型声明(number | string)，增强代码可读性
 *      3. 灵活控制类型之间的约束
 */
class LogClass<T> {
    run(v: T) {
        console.log(v)
        return v
    }
}
let logClass1 = new LogClass<number>()
// logClass1.run(1)
let logClassAny = new LogClass()
// logClassAny.run({})
// logClassAny.run(1)
// logClassAny.run(true)


interface Length {
    length: number
}
// T 传入参数必须具有length属性
function logExtend<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}
// logExtend('1')

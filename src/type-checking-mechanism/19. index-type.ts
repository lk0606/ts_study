
/**
 * 索引类型
 * 标识：keyof T
 * 意义：类型T的所有公共属性的字面量的联合类型
 * 语法：T[k] 对象T的属性k所代表的类型
 */
console.log('------------------19讲-------------')
let obj19 = {
    a: 1,
    b: 2,
    c: 3
}

function getValue(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}

// console.log(getValue(obj19, ['a', 'b']), '19 getValue')
console.log(getValue(obj19, ['e', 'b']), '19 getValue') // undefined 2 索引类型则是针对这种情况给出报错提醒

interface Obj19 {
    a: number,
    b: string
}
let key: keyof Obj19 // 'a' | 'b'

// T[k]
let value: Obj19['a'] // number

// T extends U  泛型约束 泛型变量可以通过继承某个类型或者某些属性

/**
 * T约束obj
 * k约束keys
 */
function getVal<T, k extends keyof T>(obj: T, keys: k[]): T[k][] {
    return keys.map(key => obj[key])
}
console.log(getVal(obj19, []), '19 getVal') // 疑问：如果传入数组岂不是不适合，如何检查传入数组长度必须大于1呢，返回同理

// 对象 类型接口学习
// 1. 固定的
interface List {
    readonly id: number // 只读属性
    name: string
    [x: string]: any // 字符串形式签名 list中任意字符串可以得到 任意类型的结果
    age?: number // ? 可选属性标识
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value=> {
        // console.log(value.id, value.name, 'render')
        if(value.age) {
            console.log(value.age, '可选属性 ?')
        }
    })
}

let result = {
    data: [
        { id: 1, name: 'A', sex: 'man' },
        { id: 2, name: 'B', age: 18 },
    ]
}

// render({
//     data: [
//         { id: 1, name: 'A', sex: 'man' },
//         { id: 2, name: 'B' },
//     ]
// }) // 编译器报错
render(result) // 绕过方式1
// render({
//     data: [
//         { id: 1, name: 'A', sex: 'man' },
//         { id: 2, name: 'B' },
//     ]
// } as Result) // 绕过方式2  类型断言形式1 建议
// render(<Result>{
//     data: [
//         { id: 1, name: 'A', sex: 'man' },
//         { id: 2, name: 'B' },
//     ]
// }) // 绕过方式2  类型断言形式2 react中容易引起歧义

// 可索引类型接口
interface StringArray {
    [index: number]: string // 相当于字符串数组
}
let chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: any
    // y: number
    [z: number]: number
}


// 函数类型接口
// let add: (x: number, y:number) => number
// interface Add {
//     (x: number, y: number): number // 等上
// }
// 类型别名 为函数去个名字
type Add = (x: number, y: number)=> number
let add: Add = (a, b) => a + b
// add(1, 2)

/**
 * 混合类型接口
 * 定义：既可以定义函数，又像对象一样，有属性和方法
 */
interface Lib {
    (): void
    version: number
    doSomething(): void
}
function getLib() {
    let lib: Lib = ( () => {} ) as Lib
    lib.version = 1
    lib.doSomething = ()=> {}
    return lib
}
// 实例化
let lib1 = getLib()
lib1()
lib1.doSomething()

class A {
    public a: number = 1
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
let n = { x, y, ...z }

// n = 1

// 1 命名空间
// namespace N {
//     export const n = 1
// }

// 2 类型断言 as
// let s = <A>{}
// let s = {} as A
// s.a = 1

// 3 常量枚举
// const enum E { A, B }

// 4 默认导出
// export = s

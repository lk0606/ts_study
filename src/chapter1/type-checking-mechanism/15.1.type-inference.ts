
/**
 * 类型检查机制
 * 类型推断
 * 定义：不需要指定变量的类型，ts可以根据某些规则自动推断
 * 场景：
 * 1. 初始化变量时
 *
 */

let a15
let arr15 = [1, null]
let fn15 = (x=1) => x+1

window.onkeydown = (e: KeyboardEvent) => {
    console.log(e.altKey)
}

interface Foo {
    bar: number
}
// 类型断言不要滥用
// let foo = {} as Foo
let foo15: Foo = {
    bar: 1
}
// foo15.bar = 1

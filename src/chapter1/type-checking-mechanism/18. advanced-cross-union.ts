
/**
 * 交叉类型
 * 定义：将多个类型合并为一个类型，新的类型具有所有类型的特性，特别适合对象混入的场景
 * 特点：适合做对象的混入
 * 标识：单&连接
 * 联合类型
 * 定义：声明的类型并不确定，可以为多个类型的一个
 * 特点：是类型具有一点的不确定性，使代码具有一定灵活性
 */

interface DogIf {
    run(): void
}
interface CatIf {
    jump(): void
}

// 交叉类型是取所有对象的并集！
let pet: DogIf & CatIf = {
    run() {},
    jump() {}
}


// 联合类型
let a18: number | string = 'a' || 1
let b18: 'a' | 'b' | 'c'
let c18: 1 | 2 | 3
// 对象联合类型
// implements 类类型接口继承标识
class Dog18 implements DogIf {
    run() {}
    eat() {}
}
class Cat18 implements CatIf {
    jump() {}
    eat() {}
}

enum Master {
    Boy,
    Girl
}
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog18() : new Cat18()
    pet.eat()
    // pet.run() // err 仅能访问方法的交集
    return pet
}

/**
 * 针对上面err
 * 模式：可区分的联合类型，本质是结合联合类型和字面量类型的一种类型保护方法
 * 核心思想：一个类型如果是多个类型的联合类型，并且每个类型之间有一个公共的属性，那么凭借这个公共属性，创建不同的类型保护区块
 */

interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: 'circle',
    r: number
}

type Share = Square | Rectangle | Circle // type 类型别名标识

function area(s: Share): number {
    // 利用公共属性创建不同的类型保护区块
    switch (s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width
        case "circle":
            return Math.PI * s.r ** 2
        // 检查所有可能是否覆盖
        default:
            return ((e: never) => { throw new Error(e) })(s)
    }
}
console.log(area({kind: 'circle', r: 1}))


/**
 * 12讲
 * 类类型接口
 * 定义：接口可以约束类类型成员有哪些属性以及类型
 * 关键字 implements
 * 作用：
 * 1. 类实现接口的时候，必须满足接口所有要求，但是类可以有自己的属性
 * 2. 接口只能约束类的公有（public）成员
 * 3. 接口不能约束类的构造函数
 * 继承：
 * 1. 接口可以像类一样相互继承，一个接口可以继承多个接口
 * 2. 接口继承类，相当于接口把类的成员抽象了出来
 * 3. 接口抽离类成员时，不仅抽离了public 而且抽离了 private protected
 * 抽象？
 * 只有类的成员，而没有类的实现，详见 ./11.abstract.ts
 */
interface Human {
    // new (name: string): void // err 接口不能约束类的构造函数
    name: string,
    eat(): void
}

class Asian implements Human{
    constructor(public name: string) {
        this.name = name
    }
    eat() {}
    sleep() {}
}

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {

}

// 接口可以像类一样相互继承，一个接口可以继承多个接口
let boy: Boy = {
    // 这时，boy对象必须包含四个属性
    name: '',
    eat() {},
    run() {},
    cry() {},
}

// 接口继承类，相当于接口把类的成员抽象了出来
class Auto {
    state = 1
    // private state2 = 2
}
interface AutoInterface extends Auto{

}
class C implements AutoInterface{
    state = 2
}

class Bus extends Auto implements AutoInterface{
    // 不必实现state的属性，因为他是Auto的子类
}

"use strict";
class Asian {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    eat() { }
    sleep() { }
}
// 接口可以像类一样相互继承，一个接口可以继承多个接口
let boy = {
    // 这时，boy对象必须包含四个属性
    name: '',
    eat() { },
    run() { },
    cry() { },
};
// 接口继承类，相当于接口把类的成员抽象了出来
class Auto {
    constructor() {
        this.state = 1;
        // private state2 = 2
    }
}
class C {
    constructor() {
        this.state = 2;
    }
}
class Bus extends Auto {
}

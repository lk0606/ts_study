

/**
 * 11讲
 * abstract -抽象类，js中并没有，ts对js进行了扩展
 * 定义：只能被继承，不能被实例化
 * 抽象方法：子类中有不同实现方法，只需在父类中定义即可
 * 好处：抽离事物的共性，利于代码服用
 */
console.log('')
abstract class Animal {
    eat() {
        console.log('abstract class Animal eat...')
    }
    abstract sleep(): void
}
// let animal = new Animal() // err 只能被继承，不能被实例化

class Cat extends Animal{
    constructor(public name: string) {
        super()
        this.name = name
    }
    sleep() {
        console.log('class Cat extends Animal sleep...')
    }
}

let cat = new Cat('mm')
cat.eat()
// cat.sleep()

class Lion extends Animal{
    sleep() {
        console.log('class Lion extends Animal sleep...')
    }
}
let lion = new Lion()

let animals: Animal[] = [cat, lion]
// 具体的实例是不同的实例，方法也是不同的方法，即实现了多态
animals.forEach(item=> {
    item.sleep()
})

class WorkFlow {
    add() {
        console.log('git add')
        return this
    }
    commit() {
        console.log('git commit')
        return this
    }
}
let workFlow = new WorkFlow()
// 方法的链式调用
console.log(workFlow.add().commit(), 'workFlow.add().commit()')

class MyFlow extends WorkFlow{
    next() {
        console.log('class MyFlow extends WorkFlow next')
        return this
    }
}
let myFlow = new MyFlow()
console.log(myFlow.next(), 'myFlow.next()')
// console.log(new MyFlow.next(), 'workFlow.add().commit()') // 这种写法报错，为什么，没懂

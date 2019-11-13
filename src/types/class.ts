
/**
 * 第9讲
 * ts中的类
 * 与js的关系： 覆盖了js中的类，意味着具备js的特性
 * 不同：实例的属性必须具有初始值，或者在构造函数中被初始化
 */
/**
 * 无论es还是ts
 * 方法：类的成员的方法都是原型方法
 * 属性：类的成员的属性都是实例属性，而不是原型属性
 */
console.log()
// 默认返回Dog 也就是构造函数 本身
class Dog {
    constructor(name: string, readonly readonlyNum: number) {
        this.name = name
        this.readonlyNum = readonlyNum
    }
    public name: string // 增加了类型注解
    static food: string = 'bones'

    run() {} // 默认返回 void
    private privateFn() {}
    protected protectedFn() {}
}
console.log(Dog.prototype, 'Dog.prototype') // 原型：不包括name属性，仅包括Dog及run方法
let dog = new Dog('ww',5)
console.log(dog, 'new Dog(\'ww\')') // 实例：仅包括Dog及run方法
// dog.privateFn() // error 不可被实例调用
// dog.protectedFn() // error 受保护成员只能在类或子类中访问，而不可被实例中访问
console.log(Dog.food, 'static Dog.food') // static只能通过类名来调用
// console.log(dog.food, 'static dog.food') // error static不能通过实例调用

class Husky extends Dog {
    constructor (name: string, readonlyNum: number, color: string) {
        super(name, readonlyNum) // 代表父类的实例
        this.color = color // 必须在super之后  同es
        // this.privateFn() // error 也不可被子类调用
        this.protectedFn() // success
    }
    color: string
}
console.log(Husky.food, 'static Husky.food') // static子类通过子类的构造函数名访问

/**
 * 类的修饰符
 * 分类：public private protected readonly
 * 默认：类的属性默认 public 所有可见
 * 在constructor内使用可以省去 类型注解 例如：readonlyNum
 */

/**
 * private
 * 属性或方法：只可被本身调用，也就是原型内部。 不可被实例调用，也不可被子类调用
 * 构造函数本身：既不可被实例化，也不可被继承
 */

/**
 * protected
 * 属性或方法：受保护成员只能在类或子类中访问，而不可被实例中访问
 * 构造函数本身: 类不能被实例化，只能被继承
 */

/**
 * readonly
 * 属性或方法：不可被更改，且必须被初始化（跟实例属性一样）
 */

/**
 * static
 * 属性或方法：只能通过类名来调用，而不能通过，可以被继承
 */

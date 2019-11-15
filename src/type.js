"use strict";
// 原始类型
let bool, num, str;
// 数组
let arrNum1, arrNum2;
arrNum2 = [1, '1'];
// 元组 只能定义相同类型个数的值，可以push之类操作，但是不可访问
let tuple = [1, '1'];
// tuple.push(2)
// console.log(tuple, 'tuple')
// tuple[0]
// 函数
// let add = (x:number, y: number) => x + y
let compute;
compute = (a, b) => a + b;
// 对象
let obj = { x: 1, y: 2 };
obj.x = 3;
// symbol
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2, 's1===s2');
// undefined null
let und = undefined; // 只能是它本身
let nul = null; // 只能是它本身
// 官方定义：这两类是任何类型的子类，编译器中需设置  "strictNullChecks": false 严格模式可以为true
// num = nul
// void js中是一种操作符，可以将任何表达式返回 undefined 最简洁方式 其实就是说没有返回值。
let noReturn = () => { };
let noFn = () => { };
// any 和js无区别
let any;
// never
let err = () => {
    throw new Error('error');
};
// while 编译器为什么报错，没懂
let endless = () => {
    while (true) {
    }
};
/**
 * 枚举类 会递增 可以单独赋值
 * 原理 反向映射？
 * 字符串枚举不可反向映射
 * 字符串和数字枚举易混淆，不建议使用
 * 枚举不可修改
 */
var role;
(function (role) {
    role[role["reporter"] = 0] = "reporter";
    role[role["developer"] = 1] = "developer";
    role[role["owner"] = 2] = "owner";
})(role || (role = {}));
// role.owner = 3
console.log(role.reporter, role.developer, role.owner, 'enum role key');
console.log(role, 'enum');
// 分类
// 1.  常量枚举 const
var chart;
(function (chart) {
    chart[chart["a"] = 0] = "a";
    // b = Char.a,   // 对enum的引用
    chart[chart["c"] = 4] = "c";
})(chart || (chart = {}));
console.log(chart, 'chart');
// console.log(constEnum, 'constEnum') // 浏览器中报错
// 2. computed 需要被计算的成员
/**
 *  非 常量
 *  编译不会计算，
 *  保留至执行阶段
 *  必须有初始值
 */
var computedEnum;
(function (computedEnum) {
    computedEnum[computedEnum["d"] = Math.random()] = "d";
    computedEnum[computedEnum["e"] = '123'.length] = "e";
})(computedEnum || (computedEnum = {}));
console.log(computedEnum, 'computedEnum');
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "aaa";
    G["b"] = "bbb";
})(G || (G = {}));
let e = 1;
let f = 2;
// e===f // 不同枚举类型不可比较
let e1 = E.a;
let e2 = E.b;
// e1===e2 // 不可比较
let e3 = 1;
e1 === e3; // 相同类型 但是编译器为什么报错？？？
// 字符串枚举只能是枚举成员的类型
let g1 = G.b;
let g2 = G.a;

"use strict";
// 函数定义
function sum1(x, y) {
    return x + y;
}
let sum3 = (a, b) => a + b;
// -------------------------以上四种皆为必传参数
// 可选参数 可选参数必须在必选参数之后
function sum5(x, y) {
    return y ? x + y : x;
}
// sum5(1)
// 类似es6 默认值 必选参数之后的可以不传
function sum6(a, b = 2, c, d = 4) {
    return a + b + c + d;
}
console.log(sum6(1, undefined, 3), 'sum6(1, undefined, 3)'); // 10  1 + 2 + 3 + 4
console.log(sum6(undefined, undefined, 3), 'sum6(undefined, undefined, 3)'); // NaN
// 剩余参数  参数个数不固定
function sum7(a, ...rest) {
    return a + rest.reduce((pre, cur) => pre + cur);
}
// console.log()
console.log(sum7(1, 2, 3, 4), 'sum7(1, 2, 3, 4)');
function sum8(...rest) {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}
console.log(sum8(1, 2, 3), 'sum8(1,2,3) 函数重载');
console.log(sum8('a', 'b', 'c'), 'sum8(1,2,3) 函数重载');

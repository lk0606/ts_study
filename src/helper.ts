

/**
 * 测试 tsconfig noEmitHelpers
 */
class A {}
class B extends A {}

// importHelpers
// export = B

/**
 * 测试 downlevelIteration
 * 好像关闭未实现 concat
 */

let arr1 = [2, 3]
let arr2 = [1, ...arr1]

/**
 * 测试 strictBindCallApply
 */


// function add(x:number, y:number) {
//     return
// }
// add.call(undefined, 1, '2') // false 时允许



// import './amd.ts'
// import a = require('amd');


let hello: string = 'hello tsc'
document.querySelectorAll('.app')[0].innerHTML = hello


/**
 * tsconfig lib [] example
 * es2019
 */
// console.log([1, 2, [3, 4]].flat())

/**
 * noImplicitThis
 */
// class C {
//     a: number = 1
//     getA() {
//         return function () {
//             console.log(this.a)
//         }
//     }
// }
//
// let c = new C().getA()
// c()

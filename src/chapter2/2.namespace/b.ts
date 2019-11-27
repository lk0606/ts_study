/// <reference path="a.ts" />
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

console.log(Shape.circle(2))
console.log(Shape.square(2))

import circle = Shape.circle
console.log(circle(2))

// 命名空间不要和模块混用，不要再模块中使用命名空间，命名空间最好在全局中使用

namespace Shape {
    const pi = Math.PI
    // export 使函数全局可见
    export function circle(r: number) {
        return pi * r ** 2
    }
}

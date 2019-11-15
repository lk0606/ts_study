"use strict";
function render(result) {
    result.data.forEach(value => {
        // console.log(value.id, value.name, 'render')
        if (value.age) {
            console.log(value.age, '可选属性 ?');
        }
    });
}
let result = {
    data: [
        { id: 1, name: 'A', sex: 'man' },
        { id: 2, name: 'B', age: 18 },
    ]
};
// render({
//     data: [
//         { id: 1, name: 'A', sex: 'man' },
//         { id: 2, name: 'B' },
//     ]
// }) // 编译器报错
render(result); // 绕过方式1
let chars = ['a', 'b'];
let add = (a, b) => a + b;
function getLib() {
    let lib = (() => { });
    lib.version = 1;
    lib.doSomething = () => { };
    return lib;
}
// 实例化
let lib1 = getLib();
lib1();
lib1.doSomething();

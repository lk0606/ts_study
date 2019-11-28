(function (root, factory) {
    // console.log(root, factory, 'root, factory')
    if (typeof define === "function" && define.amd) {
        // console.log(define(factory), 'umd define')
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        console.log(module, 'umd module')
        module.exports = factory();
    } else {
        root.umdLib = factory();
    }
}(this, function() {
    // console.log(this, 'umd this')
    return {
        version: '1.0.0',
        doSomething() {
            console.log('umdLib do something');
        }
    }
}));

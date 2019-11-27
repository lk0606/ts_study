var Shape;
(function (Shape) {
    var pi = Math.PI;
    // export 使函数全局可见
    function circle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));

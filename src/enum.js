function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name, 'render');
    });
}
var result = {
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
    ]
};
render(result);

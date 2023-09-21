function invokeFunctions(...functions) {
    return functions.map(func => func());
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
const results = invokeFunctions(() => add(2, 3), () => subtract(5, 2), () => multiply(3, 4));
console.log(results);

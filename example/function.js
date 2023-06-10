/*
    - function declaration
    - function expression
    - arrow function
*/

function functionDeclaration(a, b) {
    return a + b;
}
console.log(functionDeclaration(10, 20));

const functionExpression = function (a, b) {
    return a + b;
}
console.log(functionExpression(10, 20));

const arrowFunction = (a, b) => {
    console.log();
    return a + b;
}
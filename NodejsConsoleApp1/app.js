let add = function (a, b) {
    return a + b;
};
function division(a, b) {
    return a / b;
}
;
//
function getName(firstName, secondName) {
    return secondName ? firstName + " " + secondName : firstName;
}
;
//
function addNumbers(...numbersArray) {
    let sum;
    for (var i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum;
}
//
function operation(a, b, op) {
    return op(a, b);
}
function docNumberBuilder() {
    return '001';
}
function createDocument(buildNumber) {
    let number = buildNumber();
    let operator = new Operator(1, 'Kate');
    return new Document(1, number, operator);
}
let document = createDocument(docNumberBuilder);
console.log(document.getInfo());
console.log(division(5, 0));
console.log(addNumbers(5, 6, 7, 8));
console.log(operation(5, 6, add));
console.log(operation(5, 6, division));
console.log(operation(5, 6, (a, b) => a * b));
console.assert(false, 'alert');
console.log(add(5, 10));
//# sourceMappingURL=app.js.map
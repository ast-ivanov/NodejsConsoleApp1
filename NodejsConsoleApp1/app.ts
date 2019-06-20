let add = function (a: number, b: number): number {
    return a + b;
};

function division(a: number, b: number): number {
    return a / b;
};

//Необязательный параметр
function getName(firstName: string, secondName?: string): string {
    return secondName ? firstName + " " + secondName : firstName;
};

//Параметр по умолчанию
function getFullName(firstName: string, secondName: string="Ivanov"): string {
    return firstName + " " + secondName;
};

//Неопределённый набор параметров
function addNumbers(...numbersArray: number[]): number {
    let sum: number;

    for (var i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    return sum;
}

//Передача типа функции в качестве параметра другой функции
function operation(a: number, b: number, op: (x: number, y: number) => number) {
    return op(a, b);
}

function docNumberBuilder() {
    return '001';
}

function createDocument(buildNumber: BuildDocumentNumber) {
    let number = buildNumber();
    let operator = new Operator(1, 'Kate');
    return new Document(1, number, operator);
}

let document = createDocument(docNumberBuilder);

//Реализация интерфейса объектом
let documentBuilder: IDocumentBuilder = {
    generateNumber: docNumberBuilder,
    build: (id, operator) => new Document(id, '002', operator)
}

console.log(document.getInfo());
console.log(division(5, 0));
console.log(addNumbers(5, 6, 7, 8));
console.log(operation(5, 6, add));
console.log(operation(5, 6, division));
console.log(operation(5, 6, (a, b) => a * b));
console.assert(false, 'alert');
console.log(add(5, 10));
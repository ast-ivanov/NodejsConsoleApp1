namespace Functions {
    let add = function (a: number, b: number): number {
        return a + b;
    }
    console.log(add(5, 10));

    function division(a: number, b: number): number {
        return a / b;
    }
    console.log(division(5, 0));

    //Необязательный параметр
    function getName(firstName: string, secondName?: string): string {
        return secondName ? firstName + " " + secondName : firstName;
    }

    //Параметр по умолчанию
    function getFullName(firstName: string, secondName: string = "Ivanov"): string {
        return firstName + " " + secondName;
    }

    //Неопределённый набор параметров
    function addNumbers(...numbersArray: number[]): number {
        let sum: number;

        for (var i = 0; i < numbersArray.length; i++) {
            sum += numbersArray[i];
        }

        return sum;
    }
    console.log(addNumbers(5, 6, 7, 8));

    //Тип функции в качестве параметра другой функции
    function operation(a: number, b: number, op: (x: number, y: number) => number) {
        return op(a, b);
    }
    console.log(operation(5, 6, add));
    console.log(operation(5, 6, division));
    console.log(operation(5, 6, (a, b) => a * b));

    //Интерфейс функции в качестве параметра другой функции
    function createDocument(buildNumber: BuildDocumentNumber) {
        let number = buildNumber();
        let operator = new Operator(1, 'Kate');
        return new Document(1, number, operator);
    }
    //Стрелочная функция
    console.log(createDocument(() => "001").getInfo());
}
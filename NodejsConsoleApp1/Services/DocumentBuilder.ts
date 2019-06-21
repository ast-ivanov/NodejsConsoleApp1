//Интерфейс
interface IDocumentBuilder {
    generateNumber: BuildDocumentNumber;

    build(id: number, author: Operator): Document;
};

//Интерфейс функции
interface BuildDocumentNumber {
    (): string;
};
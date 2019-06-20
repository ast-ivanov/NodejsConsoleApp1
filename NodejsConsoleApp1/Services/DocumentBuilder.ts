//Интерфейс
interface IDocumentBuilder {
    generateNumber: BuildDocumentNumber;

    build(id: number, author: Operator): Document;
};

//Интерфейс функции
interface BuildDocumentNumber {
    (): string;
};

//Реализация интерфейса классом
class DocumentBuilder implements IDocumentBuilder {
    generateNumber(): string {
        return '001';
    }

    build(id: number, author: Operator): Document {
        let number: string = this.generateNumber();

        return new Document(id, number, author);
    }
};
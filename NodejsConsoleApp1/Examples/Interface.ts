namespace Interface {
    function docNumberBuilder() {
        return '001';
    }

    //Реализация интерфейса объектом
    let documentBuilder: IDocumentBuilder = {
        generateNumber: docNumberBuilder,
        build: (id, operator) => new Document(id, '002', operator)
    }

    //Реализация интерфейса классом
    class DocumentBuilder implements IDocumentBuilder {
        generateNumber(): string {
            return '001';
        }

        build(id: number, author: Operator): Document {
            let number: string = this.generateNumber();

            return new Document(id, number, author);
        }
    }
}
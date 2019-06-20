class Document extends DeletedEntity {

    readonly number: string;

    readonly author: Operator;

    constructor(id: number, number: string, author: Operator) {
        super(id);

        this.number = number;
        this.author = author;
    }
}
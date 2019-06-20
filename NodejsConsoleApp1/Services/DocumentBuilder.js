;
;
//Реализация интерфейса классом
class DocumentBuilder {
    generateNumber() {
        return '001';
    }
    build(id, author) {
        let number = this.generateNumber();
        return new Document(id, number, author);
    }
}
;
//# sourceMappingURL=DocumentBuilder.js.map
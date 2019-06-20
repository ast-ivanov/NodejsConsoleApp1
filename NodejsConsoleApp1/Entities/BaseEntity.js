//Абстрактный класс
class BaseEntity {
    constructor(id) {
        this.id = id;
        this.createDate = new Date();
    }
    getInfo() {
        return 'id: ' + this.id + '; create date: ' + this.createDate;
    }
}
//# sourceMappingURL=BaseEntity.js.map
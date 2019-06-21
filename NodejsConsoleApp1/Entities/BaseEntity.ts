//Абстрактный класс
abstract class BaseEntity<T> {
    //Свойство только для чтения
    readonly id: T;

    readonly createDate: Date;

    constructor(id: T) {
        this.id = id;
        this.createDate = new Date();
    }

    public getInfo(): string {
        return 'id: ' + this.id + '; create date: ' + this.createDate;
    }
}
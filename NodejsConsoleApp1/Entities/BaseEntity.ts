//Абстрактный класс
abstract class BaseEntity {
    //Свойство только для чтения
    readonly id: number;

    readonly createDate: Date;

    constructor(id: number) {
        this.id = id;
        this.createDate = new Date();
    }

    public getInfo(): string {
        return 'id: ' + this.id + '; create date: ' + this.createDate;
    }
}
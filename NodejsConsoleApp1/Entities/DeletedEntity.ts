abstract class DeletedEntity extends BaseEntity<number> {

    protected _deleted: boolean;

    protected _deletedDate: Date;

    constructor(id: number) {
        super(id);

        this._deleted = false;
        this._deletedDate = null;
    }

    //Метод доступа
    public get deleted() {
        return this._deleted;
    }

    public get deletedDate() {
        return this._deletedDate;
    }

    public delete() {
        this._deleted = true;
        this._deletedDate = new Date();
    }

    //Переопределение метода базового класса
    public getInfo(): string {
        let info = super.getInfo() + '; deleted: ' + this._deleted;

        if (this._deletedDate) {
            info += '; deleted date: ' + this._deletedDate;
        }

        return info;
    }
}
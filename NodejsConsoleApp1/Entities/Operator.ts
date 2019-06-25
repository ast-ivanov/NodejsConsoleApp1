class Operator extends BaseEntity<number> {

    protected _name: string;

    constructor(id: number, name: string) {
        super(id);

        this._name = name;
    }

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}
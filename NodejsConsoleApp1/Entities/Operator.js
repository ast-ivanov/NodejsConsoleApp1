class Operator extends BaseEntity {
    constructor(id, name) {
        super(id);
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
//# sourceMappingURL=Operator.js.map
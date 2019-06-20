class DeletedEntity extends BaseEntity {
    constructor(id) {
        super(id);
        this._deleted = false;
        this._deletedDate = null;
    }
    get deleted() {
        return this._deleted;
    }
    get deletedDate() {
        return this._deletedDate;
    }
    delete() {
        this._deleted = true;
        this._deletedDate = new Date();
    }
    getInfo() {
        let info = super.getInfo() + '; deleted: ' + this._deleted;
        if (this._deletedDate) {
            info += '; deleted date: ' + this._deletedDate;
        }
        return info;
    }
}
//# sourceMappingURL=DeletedEntity.js.map
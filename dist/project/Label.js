"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
class Label {
    constructor(labelId, name) {
        this.labelId = labelId;
        this.name = name;
    }
    getLabelId() {
        return this.labelId;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    attachToTask(task) {
        task.addLabel(this);
    }
    removeFromTask(task) {
        const updatedLabels = task.getLabels().filter(l => l.getLabelId() !== this.labelId);
    }
}
exports.Label = Label;

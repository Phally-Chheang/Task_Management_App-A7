"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Milestone = void 0;
const Project_1 = require("./Project");
class Milestone extends Project_1.Project {
    constructor(id, title, dueDate, projectId, name, description, startDate, endDate) {
        super(projectId, name, description, startDate, endDate);
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDueDate() {
        return this.dueDate;
    }
    setTitle(title) {
        this.title = title;
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    isOverdue(referenceDate = new Date()) {
        return this.dueDate < referenceDate;
    }
}
exports.Milestone = Milestone;

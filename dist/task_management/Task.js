"use strict";
// Task.ts
var Priority;
(function (Priority) {
    Priority["LOW"] = "Low";
    Priority["MEDIUM"] = "Medium";
    Priority["HIGH"] = "High";
})(Priority || (Priority = {}));
var Status;
(function (Status) {
    Status["PENDING"] = "Pending";
    Status["IN_PROGRESS"] = "In Progress";
    Status["COMPLETED"] = "Completed";
})(Status || (Status = {}));
class Task {
    constructor(id, title, priority, status) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.status = status;
    }
    markComplete() {
        this.status = Status.COMPLETED;
    }
}

"use strict";
class ActivityLog {
    constructor(id, actionType, timestamp) {
        this.task = null;
        this.id = id;
        this.actionType = actionType;
        this.timestamp = timestamp;
    }
    setTask(task) {
        this.task = task;
    }
}

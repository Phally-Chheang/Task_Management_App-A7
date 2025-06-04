"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLog = void 0;
class ActivityLog {
    constructor(id, actionType, timestamp) {
        this.task = null; // 1 ActivityLog belongs to 1 Task
        this.id = id;
        this.actionType = actionType;
        this.timestamp = timestamp;
    }
    setTask(task) {
        this.task = task;
    }
}
exports.ActivityLog = ActivityLog;

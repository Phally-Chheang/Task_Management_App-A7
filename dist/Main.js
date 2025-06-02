"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main.ts
const ActivityLog_1 = require("./ActivityLog");
const Task_1 = require("./Task");
// Test script for ActivityLog
function runTest() {
    var _a;
    const task = new Task_1.Task(1, "Task 1", Task_1.Priority.HIGH, Task_1.Status.PENDING);
    const activityLog = new ActivityLog_1.ActivityLog(1, "Task Created", new Date());
    activityLog.setTask(task);
    console.log("ActivityLog ID:", activityLog.id);
    console.log("ActivityLog Action Type:", activityLog.actionType);
    console.log("ActivityLog Timestamp:", activityLog.timestamp);
    console.log("Associated Task Title:", (_a = activityLog.task) === null || _a === void 0 ? void 0 : _a.title);
    console.log("Task Status Before:", task.status);
    task.markComplete();
    console.log("Task Status After:", task.status);
}
// Run the test
runTest();

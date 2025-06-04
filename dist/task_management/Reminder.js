"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reminder = void 0;
const Task_1 = require("./Task");
class Reminder extends Task_1.Task {
    constructor(
    // Task-related parameters (call super with these)
    projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status, 
    // Reminder-specific parameters
    reminderId, message, remindAt, isSet = false, 
    // Optional arrays for Task (using defaults if not provided)
    comments = [], reminders = [], attachments = [], labels = [], notifications = [], assignedUsers = []) {
        super(projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status, comments, reminders, attachments, labels, notifications, assignedUsers);
        this.reminderId = reminderId;
        this.message = message;
        this.remindAt = remindAt;
        this.isSet = isSet;
    }
    getReminderId() {
        return this.reminderId;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    getRemindAt() {
        return this.remindAt;
    }
    setRemindAt(remindAt) {
        this.remindAt = remindAt;
    }
    isAcknowledged() {
        return this.isSet;
    }
    setAcknowledged(value) {
        this.isSet = value;
    }
}
exports.Reminder = Reminder;

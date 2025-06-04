"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// ↙ Task.ts ↘
const Project_1 = require("../project/Project");
const Comment_1 = require("./Comment");
const Attachment_1 = require("./Attachment");
const enums_1 = require("../common/enums");
class Task extends Project_1.Project {
    constructor(projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status, comments = [], reminders = [], attachments = [], labels = [], notifications = [], assignedUsers = []) {
        super(projectId, projectName, projectDescription, startDate, endDate);
        this.comments = [];
        this.reminders = [];
        this.attachments = [];
        this.labels = [];
        this.notifications = [];
        this.assignedUsers = [];
        this.taskId = taskId;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.comments = comments;
        this.reminders = reminders;
        this.attachments = attachments;
        this.labels = labels;
        this.notifications = notifications;
        this.assignedUsers = assignedUsers;
    }
    assignUser(user) {
        if (!this.assignedUsers.includes(user)) {
            this.assignedUsers.push(user);
        }
    }
    getAssignedUsers() {
        return this.assignedUsers;
    }
    addComment(projectId, taskId, userId, content, createdAt, updatedAt, isEdited, isPinned, parentCommentId, likes, dislikes, attachments = [], mentions = [], reactions = []) {
        const comment = new Comment_1.Comment(Date.now(), // commentId
        content, createdAt, projectId, this.getProjectName ? this.getProjectName() : '', this.getDescription ? this.getDescription() : '', new Date(), // startDate
        new Date(), // endDate
        taskId, this.getTitle(), this.getDescription(), this.getDueDate(), this.getPriority(), this.getStatus());
        this.comments.push(comment);
        return comment;
    }
    getComments() {
        return this.comments;
    }
    addAttachment(fileName, fileUrl) {
        // Create a minimal concrete Attachment class inline for demonstration
        class SimpleAttachment extends Attachment_1.Attachment {
            constructor(id, fileName, fileUrl) {
                // Provide dummy values for abstract Attachment's super constructor
                super(0, '', '', new Date(), new Date(), 0, '', '', new Date(), enums_1.Priority.LOW, enums_1.Status.TODO, id, fileName, fileUrl);
            }
            getAttachmentDetails() {
                return `${this.getFileName()} (${this.getFileUrl()})`;
            }
            setAttachmentDetails(fileName, fileUrl) {
                this.setFileName(fileName);
                this.setFileUrl(fileUrl);
            }
        }
        const attachment = new SimpleAttachment(Date.now(), fileName, fileUrl);
        this.attachments.push(attachment);
        return attachment;
    }
    getAttachments() {
        return this.attachments;
    }
    getReminders() {
        return this.reminders;
    }
    addReminder(reminder) {
        this.reminders.push(reminder);
    }
    getLabels() {
        return this.labels;
    }
    addLabel(label) {
        this.labels.push(label);
    }
    getNotifications() {
        return this.notifications;
    }
    addNotification(notification) {
        this.notifications.push(notification);
    }
    getTaskId() {
        return this.taskId;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getDueDate() {
        return this.dueDate;
    }
    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
    getPriority() {
        return this.priority;
    }
    setPriority(priority) {
        this.priority = priority;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    markComplete() {
        this.status = enums_1.Status.DONE;
    }
}
exports.Task = Task;

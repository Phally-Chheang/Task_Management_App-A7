"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const Task_1 = require("./Task");
class Attachment extends Task_1.Task {
    constructor(projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status, attachmentId, fileName, fileUrl) {
        super(projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status);
        this.attachmentId = attachmentId;
        this.fileName = fileName;
        this.fileUrl = fileUrl;
    }
    getAttachmentId() {
        return this.attachmentId;
    }
    getFileName() {
        return this.fileName;
    }
    setFileName(fileName) {
        this.fileName = fileName;
    }
    getFileUrl() {
        return this.fileUrl;
    }
    setFileUrl(fileUrl) {
        this.fileUrl = fileUrl;
    }
}
exports.Attachment = Attachment;

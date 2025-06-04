"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const Task_1 = require("./Task");
class Comment extends Task_1.Task {
    constructor(commentId, content, commentCreatedAt, projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status) {
        super(projectId, projectName, projectDescription, startDate, endDate, taskId, title, description, dueDate, priority, status);
        this.commentId = commentId;
        this.content = content;
        this.commentCreatedAt = commentCreatedAt;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    getCommentCreatedAt() {
        return this.commentCreatedAt;
    }
    setCommentCreatedAt(commentCreatedAt) {
        this.commentCreatedAt = commentCreatedAt;
    }
    getCommentId() {
        return this.commentId;
    }
    setCommentId(commentId) {
        this.commentId = commentId;
    }
}
exports.Comment = Comment;

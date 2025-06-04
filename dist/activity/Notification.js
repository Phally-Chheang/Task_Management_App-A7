"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(message, isRead = false) {
        this.id = Date.now(); // Generate unique ID using timestamp
        this.message = message;
        this.isRead = isRead;
    }
    getId() {
        return this.id;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    getIsRead() {
        return this.isRead;
    }
    markAsRead() {
        this.isRead = true;
    }
    display() {
        return `${this.isRead ? "[Read]" : "[Unread]"} ${this.message}`;
    }
}
exports.Notification = Notification;

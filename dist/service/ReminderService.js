"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderService = void 0;
class ReminderService {
    sendReminder(reminder) {
        const now = new Date();
        // Use getter methods instead of direct property access
        if (reminder.isAcknowledged() && reminder.getRemindAt() <= now) {
            return `Reminder: ${reminder.getMessage()}`;
        }
        return `No reminder due.`;
    }
}
exports.ReminderService = ReminderService;

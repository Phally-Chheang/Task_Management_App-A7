import { Reminder } from "../task_management/Reminder";

export class ReminderService {
  sendReminder(reminder: Reminder): string {
    const now = new Date();
    // Use getter methods instead of direct property access
    if (reminder.isAcknowledged() && reminder.getRemindAt() <= now) {
      return `Reminder: ${reminder.getMessage()}`;
    }
    return `No reminder due.`;
  }
}

import { Reminder } from "../models/Reminder";

export class ReminderService {
  sendReminder(reminder: Reminder): string {
    const now = new Date();
    if (reminder.isSet && reminder.remindAt <= now) {
      return `Reminder: ${reminder.message}`;
    }
    return `No reminder due.`;
  }
}

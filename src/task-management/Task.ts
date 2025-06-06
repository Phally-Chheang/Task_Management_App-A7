import { Project } from "../project/Project";
import { Comment } from "./Comment";
import { Reminder } from "./Reminder";
import { Attachment } from "./Attachment";
import { Label } from "../models/Label";
import { Notification } from "./Notification";
import { Status } from "../activity/Status";
import { Priority } from "../activity/Priority";

export class Task extends Project {
  taskId: number = 0;
  title: string = "";
  description: string = "";
  dueDate: Date = new Date();
  priority: string = "";
  status: string = Status.Pending;
  comment: Comment[] = [];
  reminder: Reminder[] = [];
  attachment: Attachment[] = [];
  label: Label[] = [];
  notification: Notification[] = [];

  method(type: string): string {
    return `Method ${type} executed.`;
  }

  addComment(comment: Comment): void {
    this.comment.push(comment);
  }

  addReminder(reminder: Reminder): void {
    this.reminder.push(reminder);
  }

  setPriority(priority: string): void {
    this.priority = priority;
  }

  markComplete(): void {
    this.status = Status.Active;
  }

  getTaskInfo(): object {
    return {
      priority: this.priority,
      status: this.status,
      comments: this.comment.map((c) => c.content),
      reminders: this.reminder.map((r) => r.message),
      attachments: this.attachment.map((a) => a.fileName),
      notifications: this.notification.map((n) => n.message),
    };
  }
}

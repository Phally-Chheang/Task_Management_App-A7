import { Task,  } from "./Task";
import { Comment } from "./Comment";
import { Attachment } from "./Attachment";
import { Notification } from "../activity/Notification";
import { Label } from "../project/Label";
import { User } from "../user/User";
import { Priority, Status } from "../common/enums";



export class Reminder extends Task {
  private reminderId: number;
  private message: string;
  private remindAt: Date;
  private isSet: boolean;

  constructor(
    // Task-related parameters (call super with these)
    projectId: number,
    projectName: string,
    projectDescription: string,
    startDate: Date,
    endDate: Date,
    taskId: number,
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    status: Status,
    // Reminder-specific parameters
    reminderId: number,
    message: string,
    remindAt: Date,
    isSet: boolean = false,
    // Optional arrays for Task (using defaults if not provided)
    comments: Comment[] = [],
    reminders: Reminder[] = [],
    attachments: Attachment[] = [],
    labels: Label[] = [],
    notifications: Notification[] = [],
    assignedUsers: User[] = []
  ) {
    super(
      projectId,
      projectName,
      projectDescription,
      startDate,
      endDate,
      taskId,
      title,
      description,
      dueDate,
      priority,
      status,
      comments,
      reminders,
      attachments,
      labels,
      notifications,
      assignedUsers
    );

    this.reminderId = reminderId;
    this.message = message;
    this.remindAt = remindAt;
    this.isSet = isSet;
  }

  getReminderId(): number {
    return this.reminderId;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
  }

  getRemindAt(): Date {
    return this.remindAt;
  }

  setRemindAt(remindAt: Date): void {
    this.remindAt = remindAt;
  }

  isAcknowledged(): boolean {
    return this.isSet;
  }

  setAcknowledged(value: boolean): void {
    this.isSet = value;
  }
}

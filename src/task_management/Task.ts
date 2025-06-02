import { Project } from "../project/Project";
import { Comment } from "./Comment";
import { Reminder } from "./Reminder";
import { Attachment } from "./Attachment";
import { Notification } from "./Notification";
import { Label } from "../project/Label";
import { User } from "../user/User";

export abstract class Task extends Project {
  private taskId: number;
  private title: string;
  protected description: string;
  private dueDate: Date;
  private priority: string;
  private status: string;
  private comments: Comment[];
  private reminders: Reminder[];
  private attachments: Attachment[];
  private labels: Label[];
  private notifications: Notification[] = [];
  private assignedUsers: User[] = []; // Users assigned to this task
  constructor(
    projectId: number,
    projectName: string,
    projectDescription: string,
    startDate: Date,
    endDate: Date,
    taskId: number,
    title: string,
    description: string,
    dueDate: Date,
    priority: string,
    status: string,
    comments: Comment[] = [],
    reminders: Reminder[] = [],
    attachments: Attachment[] = [],
    labels: Label[] = [],
    notifications: Notification[] = []
  ) {
    super(projectId, projectName, projectDescription, startDate, endDate);
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
    this.assignedUsers = []; // Initialize with an empty array

  }

   // User Management
  assignUser(user: User): void {
    if (!this.assignedUsers.includes(user)) {
      this.assignedUsers.push(user);
    }
  }

  getAssignedUsers(): User[] {
    return this.assignedUsers;
  }

  // Comment Management
  addComment(content: string, createdAt: Date): Comment {
    const comment = new Comment(Date.now(), content, createdAt);
    this.comments.push(comment);
    return comment;
  }

  getComments(): Comment[] {
    return this.comments;
  }

  // Attachment Management
  addAttachment(fileName: string, fileUrl: string): Attachment {
    const attachment = new Attachment(Date.now(), fileName, fileUrl);
    this.attachments.push(attachment);
    return attachment;
  }

  // Getters and Setters
  getTaskId(): number {
    return this.taskId;
  }

  public getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getDueDate(): Date {
    return this.dueDate;
  }

  setDueDate(dueDate: Date): void {
    this.dueDate = dueDate;
  }

  getPriority(): string {
    return this.priority;
  }

  setPriority(priority: string): void {
    this.priority = priority;
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(status: string): void {
    this.status = status;
  }

  
  getReminders(): Reminder[] {
    return this.reminders;
  }

  addReminder(reminder: Reminder): void {
    this.reminders.push(reminder);
  }

  getAttachments(): Attachment[] {
    return this.attachments;
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }
  addNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  getLabels(): Label[] {
    return this.labels;
  }

  addLabel(label: Label): void {
    this.labels.push(label);
  }


  markComplete(): void {
    this.status = "Completed";
  }
}

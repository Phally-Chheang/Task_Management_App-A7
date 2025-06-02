import { Project } from "../project/Project";
import { Comment } from "./Comment";
import { Reminder } from "./Reminder";
import { Attachment } from "./Attachment";
import { Label } from "../project/Label";

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
    labels: Label[] = []
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

  getComments(): Comment[] {
    return this.comments;
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
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

  addAttachment(attachment: Attachment): void {
    this.attachments.push(attachment);
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

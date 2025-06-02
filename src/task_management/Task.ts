
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
    super(projectId, projectName, projectDescription);
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
  public getTaskId(): number {
    return this.taskId;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  public setDueDate(dueDate: Date): void {
    this.dueDate = dueDate;
  }

  public getPriority(): string {
    return this.priority;
  }

  public setPriority(priority: string): void {
    this.priority = priority;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getComments(): Comment[] {
    return this.comments;
  }

  public addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  public getReminders(): Reminder[] {
    return this.reminders;
  }

  public addReminder(reminder: Reminder): void {
    this.reminders.push(reminder);
  }

  public getAttachments(): Attachment[] {
    return this.attachments;
  }

  public addAttachment(attachment: Attachment): void {
    this.attachments.push(attachment);
  }

  public getLabels(): Label[] {
    return this.labels;
  }

  public addLabel(label: Label): void {
    this.labels.push(label);
  }
}

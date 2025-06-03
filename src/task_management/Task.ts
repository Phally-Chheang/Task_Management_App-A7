// ↙ Task.ts ↘
import { Project } from "../project/Project";
import { Comment } from "./Comment";
import { Reminder } from "./Reminder";
import { Attachment } from "./Attachment";
import { Notification } from "../activity/Notification";
import { Label } from "../project/Label";
import { User } from "../user/User";

export class Task extends Project {
  private taskId: number;
  private title: string;
  protected description: string;
  private dueDate: Date;
  private priority: Priority;
  private status: Status;
  private comments: Comment[]    = [];
  private reminders: Reminder[]  = [];
  private attachments: Attachment[] = [];
  private labels: Label[]        = [];
  private notifications: Notification[] = [];
  private assignedUsers: User[]  = [];

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
    priority: Priority,
    status: Status,
    comments: Comment[]     = [],
    reminders: Reminder[]   = [],
    attachments: Attachment[] = [],
    labels: Label[]         = [],
    notifications: Notification[] = [],
    assignedUsers: User[]   = []
  ) {
    super(projectId, projectName, projectDescription, startDate, endDate);
    this.taskId       = taskId;
    this.title        = title;
    this.description  = description;
    this.dueDate      = dueDate;
    this.priority     = priority;
    this.status       = status;
    this.comments     = comments;
    this.reminders    = reminders;
    this.attachments  = attachments;
    this.labels       = labels;
    this.notifications = notifications;
    this.assignedUsers = assignedUsers;
  }

  assignUser(user: User): void {
    if (!this.assignedUsers.includes(user)) {
      this.assignedUsers.push(user);
    }
  }

  getAssignedUsers(): User[] {
    return this.assignedUsers;
  }

  addComment(
    projectId: number,
    taskId: number,
    userId: number,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    isEdited: boolean,
    isPinned: boolean,
    parentCommentId: number | null,
    likes: number,
    dislikes: number,
    attachments: Attachment[] = [],
    mentions: User[] = [],
    reactions: any[] = []
  ): Comment {
    const comment = new Comment(
      Date.now(), // commentId
      content,
      createdAt,
      projectId,
      this.getProjectName ? this.getProjectName() : '',
      this.getDescription ? this.getDescription() : '',
      new Date(), // startDate
      new Date(), // endDate
      taskId,
      this.getTitle(),
      this.getDescription(),
      this.getDueDate(),
      this.getPriority(),
      this.getStatus()
    );
    this.comments.push(comment);
    return comment;
  }

  getComments(): Comment[] {
    return this.comments;
  }

  addAttachment(fileName: string, fileUrl: string): Attachment {
    // Create a minimal concrete Attachment class inline for demonstration
    class SimpleAttachment extends Attachment {
      constructor(id: number, fileName: string, fileUrl: string) {
        // Provide dummy values for abstract Attachment's super constructor
        super(0, '', '', new Date(), new Date(), 0, '', '', new Date(), Priority.LOW, Status.TODO, id, fileName, fileUrl);
      }
      public getAttachmentDetails(): string {
        return `${this.getFileName()} (${this.getFileUrl()})`;
      }
      public setAttachmentDetails(fileName: string, fileUrl: string): void {
        this.setFileName(fileName);
        this.setFileUrl(fileUrl);
      }
    }
    const attachment = new SimpleAttachment(Date.now(), fileName, fileUrl);
    this.attachments.push(attachment);
    return attachment;
  }

  getAttachments(): Attachment[] {
    return this.attachments;
  }

  getReminders(): Reminder[] {
    return this.reminders;
  }

  addReminder(reminder: Reminder): void {
    this.reminders.push(reminder);
  }

  getLabels(): Label[] {
    return this.labels;
  }

  addLabel(label: Label): void {
    this.labels.push(label);
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }

  addNotification(notification: Notification): void {
    this.notifications.push(notification);
  }

  getTaskId(): number {
    return this.taskId;
  }

  getTitle(): string {
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

  getPriority(): Priority {
    return this.priority;
  }

  setPriority(priority: Priority): void {
    this.priority = priority;
  }

  getStatus(): Status {
    return this.status;
  }

  setStatus(status: Status): void {
    this.status = status;
  }

  markComplete(): void {
    this.status = Status.DONE;
  }
}

// Define enums directly here if the imported files are empty
export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum Status {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

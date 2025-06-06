import { Comment } from "./Comment";
import { Reminder } from "./Reminder";
import { Attachment } from "./Attachment";

export class Task {
  public comments: Comment[] = [];
  public reminders: Reminder[] = [];
  public attachments: Attachment[] = [];

  constructor(
    public taskId: number,
    public title: string,
    public description: string,
    public dueDate: Date,
    public priority: string,
    public status: string
  ) {}

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  setPriority(priority: string): void {
    this.priority = priority;
  }

  markComplete(): void {
    this.status = "Completed";
  }
}

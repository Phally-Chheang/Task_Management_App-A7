import { Task } from "./Task";

export class Comment extends Task {
  private commentId: number;
  private content: string;
  private commentCreatedAt: Date;

  constructor(
    commentId: number,
    content: string,
    commentCreatedAt: Date,
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
    status: string
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
      status
    );
    this.commentId = commentId;
    this.content = content;
    this.commentCreatedAt = commentCreatedAt;
  }

  getContent(): string {
    return this.content;
  }
setContent(content: string): void {
        this.content = content;
}

  getCommentCreatedAt(): Date {
    return this.commentCreatedAt;
  }
setCommentCreatedAt(commentCreatedAt: Date): void {
        this.commentCreatedAt = commentCreatedAt;
    }

  getCommentId(): number {
    return this.commentId;
  }
setCommentId(commentId: number): void {
        this.commentId = commentId;
    }
}
    
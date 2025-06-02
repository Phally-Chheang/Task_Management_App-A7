export class Comment {
  private commentId: number;
  private content: string;
  private createdAt: Date;

  constructor(commentId: number, content: string, createdAt: Date) {
    this.commentId = commentId;
    this.content = content;
    this.createdAt = createdAt;
  }

  getContent(): string { return this.content; }
}
export class Comment {
  constructor(
    public commentId: number = 0,
    public content: string = "",
    public createdAt: Date = new Date()
  ) {}

  getContent(): string {
    return this.content;
  }
}

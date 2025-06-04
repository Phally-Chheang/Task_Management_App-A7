export class Notification {
  private id: number;
  private message: string;
  private isRead: boolean;

  constructor(message: string, isRead: boolean = false) {
    this.id = Date.now();
    this.message = message;
    this.isRead = isRead;
  }

  getId(): number {
    return this.id;
  }

  getMessage(): string {
    return this.message;
  }

  setMessage(message: string): void {
    this.message = message;
  }

  getIsRead(): boolean {
    return this.isRead;
  }

  markAsRead(): void {
    this.isRead = true;
  }

  display(): string {
    return `${this.isRead ? "[Read]" : "[Unread]"} ${this.message}`;
  }
}

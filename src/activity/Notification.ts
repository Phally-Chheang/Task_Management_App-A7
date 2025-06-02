export class Notification {
    id: string;
    message: string;
    isRead: boolean;

    constructor(id: string, message: string, isRead: boolean = false) {
        this.id = id;
        this.message = message;
        this.isRead = isRead;
    }

    markAsRead(): void {
        this.isRead = true;
    }

    display(): string {
        return `${this.isRead ? "[Read]" : "[Unread]"} ${this.message}`;
    }
}
